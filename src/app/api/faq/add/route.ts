import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { Faq } from "@/lib/faq.model";

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

    const novaFaq = new Faq({ pergunta, resposta, categoria });
    await novaFaq.save();

    return NextResponse.json({ message: "FAQ adicionada com sucesso!" });
  } catch (error) {
    return NextResponse.json(
      { error: "Erro ao adicionar FAQ." },
      { status: 500 }
    );
  }
}
