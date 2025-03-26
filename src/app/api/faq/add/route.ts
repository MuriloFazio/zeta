import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { Faq } from "@/lib/faq.model";
import { gerarEmbedding } from "@/lib/openai";

export async function adicionarFaq(
  pergunta: string,
  resposta: string,
  categoria?: string
) {
  await connectDB();

  if (!pergunta || !resposta) {
    return NextResponse.json(
      { error: "Pergunta e resposta são obrigatórias." },
      { status: 400 }
    );
  }

  // Gerar embedding da pergunta
  const embedding = await gerarEmbedding(pergunta);

  // Salvar no MongoDB
  const novaFaq = new Faq({ pergunta, resposta, categoria, embedding });
  await novaFaq.save();

  return NextResponse.json({ message: "FAQ adicionada com sucesso!" });
}

export async function POST(req: Request) {
  try {
    const { pergunta, resposta, categoria } = await req.json();
    const resultado = await adicionarFaq(pergunta, resposta, categoria);
    return NextResponse.json(resultado);
  } catch (error) {
    return NextResponse.json(
      { error: "Erro ao adicionar FAQ." },
      { status: 500 }
    );
  }
}
