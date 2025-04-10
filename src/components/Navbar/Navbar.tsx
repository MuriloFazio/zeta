"use client";

import {
  Container,
  LogoWrapper,
  StyledImage,
  ButtonWrapper,
  StyledButton,
} from "./styles";
import filledLogo from "../../assets/icons/zeta_filled_logo.png";

export const Navbar: React.FC = () => {
  return (
    <Container>
      <LogoWrapper href="/">
        <StyledImage alt="logo" src={filledLogo}></StyledImage>
        <div>Zeta</div>
      </LogoWrapper>
      <ButtonWrapper>
        <StyledButton href="/login">Entrar</StyledButton>
        {/* <StyledButton href="/register">Cadastrar</StyledButton> */}
      </ButtonWrapper>
    </Container>
  );
};

export default Navbar;
