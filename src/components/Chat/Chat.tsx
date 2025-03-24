"use client";

import { TextField, IconButton } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import MicIcon from "@mui/icons-material/Mic";
import StopCircleIcon from "@mui/icons-material/StopCircle";
import { Container, ChatArea, InputArea, MessageWrapper } from "./styles";
import React, { useEffect, useState, useRef } from "react";
import { textFormatter } from "../../utils/formatters";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

export const Chat: React.FC = () => {
  const [messages, setMessages] = useState<{ role: string; content: string }[]>(
    []
  );
  const [userMessage, setUserMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [isRecording, setIsRecording] = useState(false);

  const { transcript, resetTranscript, browserSupportsSpeechRecognition } =
    useSpeechRecognition();
  const startListening = () => {
    console.log("Iniciando reconhecimento de voz");
    SpeechRecognition.startListening({ continuous: true, language: "pt-BR" });
  };

  const handleSendMessage = async () => {
    if (!userMessage.trim()) return;

    const newMessage = { role: "user", content: userMessage };
    setMessages((prevMessages) => [...prevMessages, newMessage]);

    setLoading(true);
    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: userMessage }),
      });

      const data = await response.json();

      const botMessage = {
        role: "assistant",
        content: data.resposta || "No response available",
      };

      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch (error) {
      const errorMessage = {
        role: "system",
        content: `Erro ao obter resposta do ChatGPT ${error}`,
      };
      setMessages((prevMessages) => [...prevMessages, errorMessage]);
    } finally {
      setLoading(false);
      setUserMessage("");
    }
  };

  const handleSpeechMessageOn = async () => {
    if (!browserSupportsSpeechRecognition) {
      console.log("O navegador não suporta reconhecimento de voz");
      return null;
    }

    try {
      transcript && resetTranscript();
      setIsRecording(true);
      startListening();
    } catch (error) {
      console.error("Erro ao traduzir a voz", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSpeechMessageOff = () => {
    console.log("Parando reconhecimento de voz");
    SpeechRecognition.stopListening();
    setIsRecording(false);
    setUserMessage(transcript);
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
          loading={loading}
        >
          <SendIcon />
        </IconButton>
        <IconButton
          color="secondary"
          onClick={isRecording ? handleSpeechMessageOff : handleSpeechMessageOn}
        >
          {isRecording ? <StopCircleIcon /> : <MicIcon />}
        </IconButton>
      </InputArea>
    </Container>
  );
};

export default Chat;
