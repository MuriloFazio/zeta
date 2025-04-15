import { NextResponse } from "next/server";
import { createUser } from "@/queries/users";
import bcrypt from "bcryptjs";
import { connectDB } from "@/lib/mongodb";

export const POST = async (request: Request) => {
  const { name, email, password } = await request.json();

  if (!name || !email || !password) {
    return new NextResponse("Missing name, email or password", { status: 400 });
  }

  await connectDB();
  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = {
    name,
    email,
    password: hashedPassword,
  };

  try {
    await createUser(newUser);
  } catch (error) {
    console.error("Error creating user:", error);
    return new NextResponse("Error creating user", { status: 500 });
  }

  return new NextResponse("User registered successfully", { status: 201 });
};
