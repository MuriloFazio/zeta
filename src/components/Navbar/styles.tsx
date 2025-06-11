"use client";

import { styled } from "styled-components";
import Image from "next/image";
import Link from "next/link";

export const Container = styled.div`
  width: 100%;
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
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledButton = styled.button`
  color: #fff;
  background-color: #333;
  border-radius: 8px;
  padding: 8px;
  font-size: 12px;
  border: solid 1px #fff; 
`;
