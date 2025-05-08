import { NextResponse } from "next/server";
import { createUser } from "@/queries/users";
import { connectDB } from "@/lib/mongodb";

export const POST = async (request: Request) => {
  const { name, email, password } = await request.json();

  if (!name || !email || !password) {
    return new NextResponse("Missing name, email or password", { status: 400 });
  }

  await connectDB();
  // const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = {
    name,
    email,
    password,
  };

  try {
    await createUser(newUser);
  } catch (error) {
    console.error("Error creating user:", error);

    return NextResponse.json(
      {
        error: "Erro ao criar usuário",
      },
      { status: 500 }
    );
  }
  return NextResponse.json(
    { message: "User registered successfully" },
    { status: 201 }
  );
};
