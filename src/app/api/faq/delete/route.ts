import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { Faq } from "@/lib/faq.model";

export async function DELETE(req: Request) {
  try {
    await connectDB();
    const { id } = await req.json();

    if (!id) {
      return NextResponse.json({ error: "ID é obrigatório." }, { status: 400 });
    }

    const faqRemovida = await Faq.findByIdAndDelete(id);

    if (!faqRemovida) {
      return NextResponse.json(
        { error: "FAQ não encontrada." },
        { status: 404 }
      );
    }

    return NextResponse.json({ message: "FAQ removida com sucesso!" });
  } catch (error) {
    return NextResponse.json(
      { error: "Erro ao remover FAQ." },
      { status: 500 }
    );
  }
}
