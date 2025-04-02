import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json();

    if (!prompt) {
      return NextResponse.json(
        { error: "Pergunta obrigatória." },
        { status: 400 }
      );
    }

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
    });

    return NextResponse.json({ resposta: response.choices[0].message.content });
  } catch (error) {
    console.error("Erro na API da OpenAI:", error);
    return NextResponse.json(
      { error: "Erro ao buscar resposta." },
      { status: 500 }
    );
  }
}
