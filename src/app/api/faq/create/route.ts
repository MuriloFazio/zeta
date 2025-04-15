import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { Faq } from "@/lib/faq.model";
import { createEmbedding } from "@/lib/openai";

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
    const embedding = await createEmbedding(pergunta);

    // Salvar no MongoDB
    const novaFaq = new Faq({ pergunta, resposta, categoria, embedding });
    await novaFaq.save();

    return NextResponse.json({ message: "FAQ adicionada com sucesso!" });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Erro ao adicionar FAQ." },
      { status: 500 }
    );
  }
}
