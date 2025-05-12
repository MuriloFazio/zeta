"use client";

import { Chat } from "../../components/Chat/Chat";
import { Container } from "../styles";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    // Redireciona para a página de login se não estiver autenticado
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  if (!session) {
    return null;
  }

  if (session.user.role !== "pro" && session.user.role !== "admin") {
    return (
      <Container>
        <h1>Olá, {session.user.name}</h1>
        <p>Você ainda não tem permissão para acessar esta página.</p>
      </Container>
    );
  }

  return (
    <Container>
      <Chat />
    </Container>
  );
}
