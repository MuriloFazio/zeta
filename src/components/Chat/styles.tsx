import styled from "styled-components";
import { Paper } from "@mui/material";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  background-color: #121212;
  color: white;
`;

export const ChatArea = styled.div`
  flex: 1;
  padding: 16px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
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

export const MessageWrapper = styled.div<{ isUser: boolean }>`
  align-self: ${({ isUser }) => (isUser ? "flex-end" : "flex-start")};
  background-color: ${({ isUser }) => (isUser ? "#0078ff" : "#f0f0f0")};
  color: ${({ isUser }) => (isUser ? "#fff" : "#333")};
  padding: 10px 15px;
  border-radius: 12px;
  max-width: 80%;
  word-wrap: break-word;
`;
