import { NextResponse } from "next/server";
import {
  createEmbedding,
  getChatGPTResponse,
  classifyQuestion,
} from "@/lib/openai";
import { Faq } from "@/lib/faq.model";
import { connectDB } from "@/lib/mongodb";

export async function POST(req: Request) {
  try {
    await connectDB();
    const { message } = await req.json();

    // Passo 1: Classificar se a pergunta é sobre a empresa
    const itsAboutCompany = await classifyQuestion(message);

    if (itsAboutCompany) {
      // Passo 2: Criar embedding e buscar no banco
      const embeddingPergunta = await createEmbedding(message);
      const faq = await Faq.aggregate([
        {
          $vectorSearch: {
            index: "faqs",
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

      // Passo 3: Refinar resposta com ChatGPT se não encontrou no banco
      const respostaRefinada = await getChatGPTResponse(
        `Considere as informações conhecidas da empresa ao responder: ${message}`
      );
      return NextResponse.json({ resposta: respostaRefinada });
    }

    // Passo 4: Se não for sobre a empresa, pergunta direto para o ChatGPT
    const respostaChatGPT = await getChatGPTResponse(message);
    return NextResponse.json({ resposta: respostaChatGPT });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Erro ao buscar resposta." },
      { status: 500 }
    );
  }
}
