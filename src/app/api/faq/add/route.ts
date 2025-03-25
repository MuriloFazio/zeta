import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { Faq } from "@/lib/faq.model";
import { gerarEmbedding } from "@/lib/openai";
import { index } from "@/lib/pinecone";

export async function POST(req: Request) {
  try {
    await connectDB();
    const { pergunta, resposta, categoria } = await req.json();

    if (!pergunta || !resposta) {
      return NextResponse.json(
        { error: "Pergunta e resposta são obrigatórias." },
        { status: 400 }
      );
    }

    // Gerar embedding da pergunta
    const embedding = await gerarEmbedding(pergunta);

    // Salvar no MongoDB
    const novaFaq = new Faq({ pergunta, resposta, categoria });
    await novaFaq.save();

    // Salvar no Pinecone
    await index.upsert([
      {
        id: novaFaq._id.toString(), // Usamos o ID do MongoDB como chave
        values: embedding,
        metadata: { resposta },
      },
    ]);

    return NextResponse.json({ message: "FAQ adicionada com sucesso!" });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Erro ao adicionar FAQ." },
      { status: 500 }
    );
  }
}
