import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { Faq } from "@/lib/faq.model";
import { gerarEmbedding } from "@/lib/openai";

export async function POST(req: Request) {
  try {
    await connectDB();
    const { pergunta } = await req.json();

    if (!pergunta) {
      return NextResponse.json(
        { error: "Pergunta é obrigatória." },
        { status: 400 }
      );
    }

    // Gerar embedding da pergunta do usuário
    const embeddingPergunta = await gerarEmbedding(pergunta);

    // Buscar a pergunta mais próxima usando Atlas Vector Search
    const faq = await Faq.aggregate([
      {
        $vectorSearch: {
          index: "faqs", // Nome do índice criado no MongoDB Atlas
          path: "embedding",
          queryVector: embeddingPergunta,
          numCandidates: 10,
          limit: 1,
        },
      },
    ]);

    if (faq.length > 0) {
      return NextResponse.json({ resposta: faq[0].resposta });
    }

    return NextResponse.json({
      resposta: "Desculpe, não encontrei essa informação.",
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Erro ao buscar resposta." },
      { status: 500 }
    );
  }
}
