"use client";

import { Container, LogoWrapper, StyledImage } from "./styles";
import Link from "next/link";
import filledLogo from "../../assets/icons/zeta_filled_logo.png";

export const Navbar: React.FC = () => {
  return (
    <Container>
      <LogoWrapper>
        <StyledImage alt="logo" src={filledLogo}></StyledImage>
      </LogoWrapper>
      <Link href="/">Nova - Assistente Virtual</Link>
    </Container>
  );
};

export default Navbar;
