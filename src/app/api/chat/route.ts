import { NextResponse } from "next/server";
import { gerarEmbedding } from "@/lib/openai";
import { index } from "@/lib/pinecone";

export async function POST(req: Request) {
  try {
    const { pergunta } = await req.json();

    if (!pergunta) {
      return NextResponse.json(
        { error: "Pergunta é obrigatória." },
        { status: 400 }
      );
    }

    // Gerar embedding da pergunta do usuário
    const embeddingPergunta = await gerarEmbedding(pergunta);

    // Buscar a pergunta mais próxima no Pinecone
    const busca = await index.query({
      vector: embeddingPergunta,
      topK: 1, // Retorna a resposta mais relevante
      includeMetadata: true,
    });

    if (busca.matches.length > 0) {
      return NextResponse.json({
        resposta: busca.matches[0].metadata?.resposta,
      });
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
