import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { Message } from "@/lib/message.model";

export async function POST(req: Request) {
  try {
    await connectDB();
    const body = await req.json();

    const { userId, model, role, content } = body;

    if (!userId || !model || !role || !content) {
      return NextResponse.json({ error: "Dados incompletos" }, { status: 400 });
    }

    const newMessage = new Message({ userId, model, role, content });
    await newMessage.save();

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Erro ao salvar mensagem:", error);
    return NextResponse.json({ error: "Erro interno" }, { status: 500 });
  }
}
