import { NextResponse } from "next/server";
import {
  getChatGPTResponse
} from "@/lib/openai";
import { getClaudeResponse } from "@/lib/anthropic";
import { connectDB } from "@/lib/mongodb";

export async function POST(req: Request) {
  try {
    await connectDB();
    const { message, model } = await req.json();

    switch (model) {
      case "gpt-4":
        const chatGPTAnswer = await getChatGPTResponse(message);
        return NextResponse.json({ resposta: chatGPTAnswer });
      case "gemini":
        const geminiAnswer = await getChatGPTResponse(message);
        return NextResponse.json({ resposta: geminiAnswer });
      case "claude":
        const claudeAnswer = await getClaudeResponse([message]);
        return NextResponse.json({ resposta: claudeAnswer });
      default:
        return NextResponse.json(
          { error: "Modelo inválido." },
          { status: 400 }
        );
    }

  } catch (error) {
    return NextResponse.json(
      { error: error + "Erro ao buscar resposta." },
      { status: 500 }
    );
  }
}
