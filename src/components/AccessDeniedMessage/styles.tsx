import styled from "styled-components";
import Image from "next/image";

export const Container = styled.div`
  padding: 20px;
`;

export const Title = styled.h1``;

export const Info = styled.p`
  text-align: center;
`;

export const TitleImageWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 20px;
  text-align: center;
`;

export const StyledImage = styled(Image)`
  border-radius: 50%;
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
`;
