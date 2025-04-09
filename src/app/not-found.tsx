"use client";

import styled from "styled-components";
import Link from "next/link";
import { VideoBackground } from "./styles";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100dvh;
  text-align: center;
  padding: 2rem;
  color: #fff;
`;

const Title = styled.h1`
  font-size: 6rem;
  margin-bottom: 1rem;
`;

const Message = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;
`;

const HomeLink = styled(Link)`
  color: #fff;
  font-weight: bold;
  font-size: 1.2rem;
  text-decoration: underline;
`;

export default function NotFound() {
  return (
    <Container>
      <VideoBackground playsInline autoPlay muted preload="metadata" loop>
        <source
          src="https://www.shutterstock.com/shutterstock/videos/26510546/preview/stock-footage-the-matrix-style-binary-code-the-camera-moves-through-the-falling-numbers-available-in-multiple.mp4"
          type="video/mp4"
        />
      </VideoBackground>
      <Title>404</Title>
      <Message>Página não encontrada.</Message>
      <HomeLink href="/">Voltar para a Home</HomeLink>
    </Container>
  );
}
