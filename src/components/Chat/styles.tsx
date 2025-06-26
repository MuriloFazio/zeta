import styled from "styled-components";
import { TextField } from "@mui/material";
import { MessageRole } from "@/types/model";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 50px);
  width: 100%;
  background-color: #121212;
  color: white;
  position: relative;
  overflow: hidden;
`;

export const ChatArea = styled.div`
  flex: 1;
  width: 100%;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  padding: 16px 16px 84px 16px;
  align-items: center;
`;

export const MessagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 50rem;
`;

export const MessageWrapper = styled.div<{ user: MessageRole }>`
  align-self: ${({ user }) => (user === "user" ? "flex-end" : "flex-start")};
  background-color: ${({ user }) => (user === "user" ? "#0078ff" : "#f0f0f0")};
  padding: 10px 15px;
  border-radius: 12px;
  max-width: 80%;
  word-wrap: break-word;
  margin: 8px;
`;

export const InputArea = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 12px;
  background-color: #1e1e1e;
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 50rem;
  border-radius: 8px;
  justify-self: anchor-center;
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 50rem;
  border: 1px solid #333;
  border-radius: 8px;
`;

export const StyledTextField = styled(TextField)`
  & .MuiInputBase-root {
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
