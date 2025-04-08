import styled from "styled-components";
import { Button } from "@mui/material";
import Link from "next/link";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  padding: 20px;
  background-color: #1e1e1e;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const Input = styled.input`
  margin-bottom: 15px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const StyledButton = styled(Button)`
  color: #fff;
  background-color: #007bff;

  &:hover {
    background-color: #0056b3;
  }
`;

export const Title = styled.h1`
  margin-bottom: 20px;
  font-size: 24px;
  color: #fff;
  text-align: center;
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 14px;
  margin: 4px 0;
  text-align: center;
`;

export const Divider = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px 0;
`;

export const Line = styled.div`
  height: 1px;
  position: relative;
  top: 9px;
  flex-shrink: 1;
  flex-grow: 1;
  background-color: #fff;
`;

export const LineText = styled.div`
  text-align: center;
  color: #fff;
  font-size: 14px;
  margin: 0 4px;
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  padding: 20px;
  background-color: #1e1e1e;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  gap: 4px;
`;

export const StyledText = styled.p`
  text-align: center;
`;

export const StyledLink = styled(Link)`
  color: #007bff;
  text-align: center;
`;
