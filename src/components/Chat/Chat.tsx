"use client";

import { TextField, IconButton } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { Container, ChatArea, InputArea, MessageWrapper } from "./styles";
import React, { useEffect, useState, useRef } from "react";
import { getChatGPTResponse } from "./connections";
import { textFormatter } from "../../utils/formatters";

export const Chat: React.FC = () => {
  const [messages, setMessages] = useState<{ role: string; content: string }[]>(
    []
  );
  const [userMessage, setUserMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleSendMessage = async () => {
    if (!userMessage.trim()) return;

    const newMessage = { role: "user", content: userMessage };
    setMessages((prevMessages) => [...prevMessages, newMessage]);

    setLoading(true);
    try {
      const response = await getChatGPTResponse(userMessage);
      const botMessage = { role: "assistant", content: response };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch (error) {
      const errorMessage = {
        role: "system",
        content: "Erro ao obter resposta do ChatGPT",
      };
      setMessages((prevMessages) => [...prevMessages, errorMessage]);
    } finally {
      setLoading(false);
      setUserMessage("");
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Enter") {
        buttonRef.current?.click();
      }
    };

    const inputElement = inputRef.current;
    if (inputElement) {
      inputElement.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      if (inputElement) {
        inputElement.removeEventListener("keydown", handleKeyDown);
      }
    };
  }, []);

  return (
    <Container>
      <ChatArea>
        {loading && <div>Digitando...</div>}
        {messages.map((message, index) => (
          <MessageWrapper isUser={message.role === "user"} key={index}>
            <div key={index}>{textFormatter(message.content)}</div>
          </MessageWrapper>
        ))}
      </ChatArea>
      <InputArea>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Digite sua mensagem..."
          value={userMessage}
          onChange={(e) => setUserMessage(e.target.value)}
          ref={inputRef}
        />
        <IconButton
          color="primary"
          onClick={handleSendMessage}
          disabled={loading}
          ref={buttonRef}
        >
          <SendIcon />
        </IconButton>
      </InputArea>
    </Container>
  );
};

export default Chat;
