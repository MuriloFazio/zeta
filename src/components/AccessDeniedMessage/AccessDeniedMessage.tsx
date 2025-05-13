import React from "react";
import { AccessDeniedMessageProps } from "./types";

import {
  Container,
  Title,
  Info,
  TitleImageWrapper,
  StyledImage,
} from "./styles";

export const AccessDeniedMessage: React.FC<AccessDeniedMessageProps> = ({
  name,
  src,
}) => {
  return (
    <Container>
      <TitleImageWrapper>
        <Title>Olá, {name}</Title>
        {src && (
          <StyledImage src={src} alt="User Image" width={50} height={50} />
        )}
      </TitleImageWrapper>
      <Info>Você ainda não tem permissão para acessar esta página.</Info>
    </Container>
  );
};
