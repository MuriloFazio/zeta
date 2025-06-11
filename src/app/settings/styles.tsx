import { styled } from "styled-components";

export const PageContainer = styled.div``;

export const UserInfoContainer = styled.div`
  margin: 20px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 330px;
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
  color: white;
`;

export const Description = styled.p`
  font-size: 16px;
  color: white;
  margin-bottom: 20px;
  line-height: 1.5;
  text-align: center;
`;

export const ContainerSeparator = styled.div`
  width: 90%;
  height: 1px;
  background-color: #ccc;
  margin: 20px 0;
  justify-self: center;
`;
