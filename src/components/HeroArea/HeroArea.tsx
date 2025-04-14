"use client";

import React from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import {
  Container,
  Subtitle,
  Title,
  StyledButton,
  StyledImage,
} from "./styles";
import logo from "../../assets/icons/zeta_main_logo.png";

export const HeroArea: React.FC = () => {
  const { data: session } = useSession();
  const router = useRouter();

  const handleChatClick = () => {
    if (session) {
      // Usuário está logado, redirecione diretamente para o chat
      router.push("/chat");
    } else {
      // Usuário não está logado, redirecione para a página de login
      router.push("/login?callbackUrl=/chat");
    }
  };

  return (
    <Container>
      <StyledImage alt="logo" src={logo} width={300} height={300} />
      <Title>Zeta: Sua assistente inteligente</Title>
      <Subtitle>Zeta é uma assistente virtual baseada no GPT 4</Subtitle>
      <StyledButton onClick={handleChatClick}>
        {session ? "Acessar Chat" : "Entrar para Acessar o Chat"}
      </StyledButton>
    </Container>
  );
};
