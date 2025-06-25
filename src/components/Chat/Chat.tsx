"use client";

import { IconButton } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import MicIcon from "@mui/icons-material/Mic";
import StopCircleIcon from "@mui/icons-material/StopCircle";
import {
  Container,
  ChatArea,
  InputArea,
  MessageWrapper,
  StyledTextField,
  InputWrapper,
  MessagesContainer,
} from "./styles";
import React, { useEffect, useState, useRef } from "react";
import { textFormatter } from "../../utils/formatters";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { fetchMessages } from "@/lib/messages";
import { useSession } from "next-auth/react";
import { saveMessage } from "@/lib/messages";
import { ModelSelector } from "../ModelSelector/ModelSelector";
import { AIModel } from "@/types/model";
import { usePreferredModel, useUpdatePreferredModel } from "@/hooks/usePreferredModel";

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
    SpeechRecognition.startListening({ continuous: true, language: "pt-BR" });
  };
  const { data: session } = useSession();
  const { data: preferredModel = "gpt-4" } = usePreferredModel();
  const { mutate: updateModel } = useUpdatePreferredModel();

  const handleModelChange = (newModel: AIModel) => {
    updateModel(newModel);
  };

  const handleSendMessage = async () => {
    if (!userMessage.trim()) return;

    const newMessage = { role: "user", content: userMessage };
    setMessages((prev) => [...prev, newMessage]);

    if (!session?.user?.id) return;
    const userId = session.user.id;

    await saveMessage({
      userId,
      model: preferredModel,
      role: "user",
      content: userMessage,
    });

    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage }),
      });

      const data = await res.json();

      const botMessage = {
        role: "assistant",
        content: data.resposta || "No response available",
      };

      setMessages((prev) => [...prev, botMessage]);

      await saveMessage({
        userId,
        model: preferredModel,
        role: "assistant",
        content: botMessage.content,
      });
    } catch (error) {
      const errorMessage = {
        role: "system",
        content: `Erro ao obter resposta: ${error}`,
      };
      setMessages((prev) => [...prev, errorMessage]);
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
      resetTranscript();
      setIsRecording(true);
      startListening();
    } catch (error) {
      console.error("Erro ao traduzir a voz", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSpeechMessageOff = () => {
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

  useEffect(() => {

    const loadMessages = async () => {
      if (!session?.user?.id) return;

      const history = await fetchMessages(session.user.id, preferredModel);

      const formattedMessages = history.map((msg: { role: string; content: string }) => ({
        role: msg.role,
        content: msg.content,
      }));

      setMessages(formattedMessages);
    };

    loadMessages();
  }, [session, preferredModel]);

  return (
    <Container>
      <div style={{ display: "flex", justifyContent: "flex-end", padding: "10px" }}>
        <ModelSelector
          onModelChange={handleModelChange} selectedModel={preferredModel}>
        </ModelSelector>
      </div>
      <ChatArea>
        {messages.map((message, index) => (
          <MessagesContainer key={index}>
            <MessageWrapper isUser={message.role === "user"} key={index}>
              <div key={index}>{textFormatter(message.content)}</div>
            </MessageWrapper>
          </MessagesContainer>
        ))}
        {loading && <div>⌛ Pensando...</div>}
      </ChatArea>
      <InputArea>
        <InputWrapper>
          <StyledTextField
            fullWidth
            multiline
            maxRows={4}
            variant="outlined"
            placeholder="Digite sua mensagem..."
            value={userMessage}
            onChange={(e) => setUserMessage(e.target.value)}
            ref={inputRef}
          />

        </InputWrapper>
        <IconButton
          onClick={handleSendMessage}
          disabled={loading}
          ref={buttonRef}
        >
          <SendIcon htmlColor="green" />
        </IconButton>
        <IconButton
          onClick={
            isRecording ? handleSpeechMessageOff : handleSpeechMessageOn
          }
        >
          {isRecording ? (
            <StopCircleIcon htmlColor="red" />
          ) : (
            <MicIcon htmlColor="green" />
          )}
        </IconButton>
      </InputArea>
    </Container>
  );
};

export default Chat;
