import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { Faq } from "@/lib/faq.model";

// Rota GET para buscar todas as perguntas da FAQ
export async function GET() {
  try {
    await connectDB();
    const faqs = await Faq.find().sort({ atualizadoEm: -1 }); // Busca todas as perguntas, ordenadas pela mais recente
    return NextResponse.json(faqs);
  } catch (error) {
    return NextResponse.json(
      { error: "Erro ao buscar FAQs." },
      { status: 500 }
    );
  }
}
