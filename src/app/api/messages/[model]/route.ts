import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { Message } from "@/lib/message.model";

export async function GET(
  req: NextRequest
) {
  try {
    await connectDB();

    const userId = req.nextUrl.searchParams.get("userId");

    if (!userId) {
      return NextResponse.json({ error: "Parâmetros inválidos." }, { status: 400 });
    }

    const messages = await Message.find({ userId, model: 'gpt-4' }).sort({ createdAt: 1 });

    return NextResponse.json(messages);
  } catch (error) {
    console.error("Erro ao buscar mensagens:", error);
    return NextResponse.json({ error: "Erro interno ao buscar mensagens." }, { status: 500 });
  }
}
