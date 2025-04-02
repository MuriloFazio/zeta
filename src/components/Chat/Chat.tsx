"use client";

import { TextField, IconButton } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { Container, ChatArea, InputArea, MessageWrapper } from "./styles";
import React, { useEffect, useState, useRef } from "react";
import { getChatGPTResponse, classifyQuestion } from "@/lib/openai";
import { textFormatter } from "../../utils/formatters";

export const Chat: React.FC = () => {
  const [messages, setMessages] = useState<{ role: string; content: string }[]>(
    []
  );
  const [userMessage, setUserMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // const handleSendMessage = async () => {
  //   if (!userMessage.trim()) return;

  //   const newMessage = { role: "user", content: userMessage };
  //   setMessages((prevMessages) => [...prevMessages, newMessage]);

  //   setLoading(true);
  //   try {
  //     const response = await getChatGPTResponse(userMessage);
  //     const botMessage = {
  //       role: "assistant",
  //       content: response || "No response available",
  //     };
  //     setMessages((prevMessages) => [...prevMessages, botMessage]);
  //   } catch (error) {
  //     const errorMessage = {
  //       role: "system",
  //       content: `Erro ao obter resposta do ChatGPT ${error}`,
  //     };
  //     setMessages((prevMessages) => [...prevMessages, errorMessage]);
  //   } finally {
  //     setLoading(false);
  //     setUserMessage("");
  //   }
  // };

  const handleSendMessage = async () => {
    if (!userMessage.trim()) return;

    const newMessage = { role: "user", content: userMessage };
    setMessages((prevMessages) => [...prevMessages, newMessage]);

    setLoading(true);
    try {
      // Passo 1: Verificar se a pergunta é sobre a empresa
      const ehSobreEmpresa = await classifyQuestion(userMessage);

      let response = "";
      if (ehSobreEmpresa) {
        // Passo 2: Se for sobre a empresa, chamar a API interna do Next.js (backend)
        const res = await fetch("/api/chat", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ pergunta: userMessage }),
        });

        const data = await res.json();
        response = data.resposta;
      } else {
        // Passo 3: Se não for sobre a empresa, perguntar diretamente ao ChatGPT
        response =
          (await getChatGPTResponse(userMessage)) ?? "No response available";
      }

      const botMessage = {
        role: "assistant",
        content: response,
      };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch (error) {
      const errorMessage = {
        role: "system",
        content: `Erro ao obter resposta ${error}`,
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
