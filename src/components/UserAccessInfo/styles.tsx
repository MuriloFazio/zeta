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
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  gap: 10px;
  margin-bottom: 20px;
`;

export const StyledImage = styled(Image)`
  border-radius: 50%;
`;
