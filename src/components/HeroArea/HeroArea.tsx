import React from "react";

import {
  Container,
  Subtitle,
  Title,
  StyledButton,
  StyledImage,
} from "./styles";
import Link from "next/link";
import logo from "../../assets/icons/zeta_main_logo.png";

export const HeroArea: React.FC = () => {
  return (
    <Container>
      <StyledImage alt="logo" src={logo} width={300} height={300} />
      <Title>Zeta: Sua assistente inteligente</Title>
      <Subtitle>Zeta é uma assistente virtual baseada no GPT 3.5</Subtitle>
      <Link href={"/chat"}>
        <StyledButton>Teste agora</StyledButton>
      </Link>
    </Container>
  );
};
