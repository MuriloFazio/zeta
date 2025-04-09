"use client";

import { HeaderContainer, LogoWrapper, StyledImage } from "./styles";
import Link from "next/link";
import filledLogo from "../../assets/icons/zeta_filled_logo.png";

export const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Link href="/">Nova - Assistente Virtual</Link>
      <LogoWrapper>
        <StyledImage alt="logo" src={filledLogo}></StyledImage>
      </LogoWrapper>
    </HeaderContainer>
  );
};

export default Header;
