import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { User } from "@/lib/users.model";
import { getServerSession } from "next-auth";

export async function POST(req: NextRequest) {
  try {
    await connectDB();

    const session = await getServerSession();
    if (!session?.user?.email) {
      return NextResponse.json({ error: "Não autenticado." }, { status: 401 });
    }

    const { model } = await req.json();

    if (!["gpt-4", "claude", "gemini"].includes(model)) {
      return NextResponse.json({ error: "Modelo inválido." }, { status: 400 });
    }

    await User.findOneAndUpdate(
      { email: session.user.email },
      { preferredModel: model }
    );

    return NextResponse.json({ message: "Modelo atualizado com sucesso." });
  } catch (error) {
    console.error("Erro ao atualizar modelo:", error);
    return NextResponse.json({ error: "Erro interno do servidor." }, { status: 500 });
  }
};

export async function GET() {
  try {
    await connectDB();

    const session = await getServerSession();
    if (!session?.user?.email) {
      return NextResponse.json({ error: "Não autenticado." }, { status: 401 });
    }

    const user = await User.findOne({ email: session.user.email });

    if (!user) {
      return NextResponse.json({ error: "Usuário não encontrado." }, { status: 404 });
    }

    return NextResponse.json({ preferredModel: user.preferredModel || "gpt-4" });
  } catch (error) {
    console.error("Erro ao buscar modelo:", error);
    return NextResponse.json({ error: "Erro interno do servidor." }, { status: 500 });
  }
};
