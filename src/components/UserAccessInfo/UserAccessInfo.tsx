import React from "react";
import { UserAccessInfoProps } from "./types";

import {
  Container,
  Title,
  Info,
  TitleImageWrapper,
  StyledImage,
} from "./styles";

export const UserAccessInfo: React.FC<UserAccessInfoProps> = ({
  name,
  src,
  infoText,
}) => {
  return (
    <Container>
      <TitleImageWrapper>
        {src && (
          <StyledImage src={src} alt="User Image" width={100} height={100} />
        )}
        <Title>Olá, {name}</Title>
      </TitleImageWrapper>
      <Info>{infoText}</Info>
    </Container>
  );
};
