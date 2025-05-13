"use client";

import { Chat } from "../../components/Chat/Chat";
import { PageContainer } from "../styles";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { AccessDeniedMessage } from "../../components/AccessDeniedMessage/AccessDeniedMessage";

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
      <PageContainer>
        <AccessDeniedMessage
          name={session.user.name!}
          src={session.user.image!}
        ></AccessDeniedMessage>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <Chat />
    </PageContainer>
  );
}
