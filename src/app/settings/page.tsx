"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { UserAccessInfo } from "@/components/UserAccessInfo/UserAccessInfo";
import {
  UserInfoContainer,
  Container,
  Description,
  Title,
  PageContainer,
  ContainerSeparator,
} from "./styles";

export default function Settings() {
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
  return (
    <PageContainer>
      <UserInfoContainer>
        <UserAccessInfo
          name={session.user.name}
          src={session.user.image ?? undefined}
          infoText="Gerencie seu perfil"
        />
      </UserInfoContainer>

      <ContainerSeparator />

      <Container>
        <Title>Configurações</Title>
        <Description>
          Aqui você pode gerenciar suas configurações de conta e preferências.
        </Description>
        <Description>
          Em breve, você poderá personalizar sua experiência de uso do ChatGPT.
        </Description>
      </Container>

      <ContainerSeparator />

      <Container>
        <Title>Pagamentos e assinaturas</Title>
        <Description>Em breve você também podera ser um membro pro</Description>
      </Container>
    </PageContainer>
  );
}
