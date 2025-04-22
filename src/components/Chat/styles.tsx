import styled from "styled-components";
import { TextField } from "@mui/material";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 50px);
  width: 100%;
  background-color: #121212;
  color: white;
  padding: 16px;
`;

export const ChatArea = styled.div`
  flex: 1;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: flex-end;
  width: 100%;
  max-width: 40rem;
  align-self: center;
`;

export const StyledTextField = styled(TextField)`
  color: #ffffff !important;
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border: 1px solid #333;
  border-radius: 8px;
`;

export const InputArea = styled.div`
  display: flex;
  align-self: center;
  padding: 12px;
  width: 100%;
  max-width: 40rem;
  border-radius: 12px;
  background-color: #1e1e1e;

  & .MuiInputBase-input {
    color: #ffffff;
  }

  & .MuiOutlinedInput-notchedOutline {
    border: none;
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
