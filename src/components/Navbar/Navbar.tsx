"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import {
  Container,
  LogoWrapper,
  StyledImage,
  ButtonWrapper,
  StyledButton,
} from "./styles";
import filledLogo from "../../assets/icons/zeta_filled_logo.png";

export const Navbar: React.FC = () => {
  const { data: session } = useSession();
  const router = useRouter();

  const handleLoginClick = () => {
    if (!session) {
      router.push("/login");
    } else {
      router.push("/chat");
    }
  };

  const handleLogoutClick = () => {
    if (session) {
      router.push("/api/auth/signout");
    }
  };

  const isLoggedIn = session;

  return (
    <Container>
      <LogoWrapper href="/">
        <StyledImage alt="logo" src={filledLogo}></StyledImage>
        <div>Zeta</div>
      </LogoWrapper>
      <ButtonWrapper>
        {isLoggedIn ? (
          <StyledButton onClick={handleLogoutClick}>Sair</StyledButton>
        ) : (
          <StyledButton onClick={handleLoginClick}>Entrar</StyledButton>
        )}
      </ButtonWrapper>
    </Container>
  );
};

export default Navbar;
