import styled from "styled-components";
import { Paper } from "@mui/material";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #121212;
  color: white;
`;

export const ChatArea = styled.div`
  flex: 1;
  padding: 16px;
  overflow-y: auto;
  display: flex;
  flex-direction: column-reverse;
  gap: 8px;
  justify-content: flex-end;
  align-items: center;
`;

export const InputArea = styled(Paper)`
  display: flex;
  padding: 8px;
  background-color: #1e1e1e !important;

  & .MuiInputBase-input {
    color: #ffffff;
  }

  & .MuiInputBase-input::placeholder {
    color: #aaaaaa;
    opacity: 1;
  }
`;
