"use client";

import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 20px;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center;
  color: #fff;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`;

export const Subtitle = styled.p`
  font-size: 1.2rem;
  margin-bottom: 20px;
  text-align: center;
  color: #fff;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  max-width: 600px;
  line-height: 1.5;
  padding: 0 20px;
`;

export const StyledButton = styled.button`
  background-color: #0056b3;
  color: white;
  font-size: 1.2rem;
  padding: 10px 20px;
  border-radius: 5px;
  text-transform: none;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #004494;
    color: white;
  }
  &:focus {
    outline: none;
  }
  &:active {
    background-color: #003377;
    color: white;
  }
`;
