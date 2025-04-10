"use client";

import { styled } from "styled-components";
import Image from "next/image";
import Link from "next/link";

export const Container = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  background-color: #333;
  color: white;
  padding: 0 16px;
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LogoWrapper = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
`;

export const StyledImage = styled(Image)`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
`;

export const StyledButton = styled(Link)`
  color: #fff;
  background-color: #333;
  border-radius: 8px;
  padding: 8px;
  font-size: 12px;
  box-shadow: 0 0 8px rgba(9, 233, 20, 0.5);
`;
