"use client";

import styled from "styled-components";
import Link from "next/link";

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

const HomeButton = styled(Link)`
  color: #fff;
  font-weight: bold;
  font-size: 1.2rem;
  background-color: #333;
  border-radius: 8px;
  padding: 1rem 2rem;
  box-shadow: 0 0 10px rgba(9, 233, 20, 0.5);
`;

const VideoBackground = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
  opacity: 0.2;
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
      <HomeButton href="/">Voltar para a Home</HomeButton>
    </Container>
  );
}
