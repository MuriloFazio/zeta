import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { Faq } from "@/lib/faq.model";

export async function PUT(req: Request) {
  try {
    await connectDB();
    const { id, pergunta, resposta, categoria } = await req.json();

    if (!id || !pergunta || !resposta) {
      return NextResponse.json(
        { error: "ID, pergunta e resposta são obrigatórios." },
        { status: 400 }
      );
    }

    const faqAtualizada = await Faq.findByIdAndUpdate(
      id,
      { pergunta, resposta, categoria, atualizadoEm: new Date() },
      { new: true }
    );

    if (!faqAtualizada) {
      return NextResponse.json(
        { error: "FAQ não encontrada." },
        { status: 404 }
      );
    }

    return NextResponse.json({
      message: "FAQ atualizada com sucesso!",
      faq: faqAtualizada,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Erro ao atualizar FAQ." },
      { status: 500 }
    );
  }
}
