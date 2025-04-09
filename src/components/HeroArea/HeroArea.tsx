import React from "react";

import { Container, Subtitle, Title, StyledButton } from "./styles";
import Link from "next/link";

export const HeroArea: React.FC = () => {
  return (
    <Container>
      <Title>Nova: Sua assistente inteligente</Title>
      <Subtitle>Nova é uma assistente virtual baseada no GPT 3.5</Subtitle>
      <Link href={"/chat"}>
        <StyledButton>Teste agora</StyledButton>
      </Link>
    </Container>
  );
};
