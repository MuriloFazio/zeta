"use client";

import { TextField, IconButton } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { Container, ChatArea, InputArea } from "./styles";
import { useState } from "react";
import { getChatGPTResponse } from "./connections";

export const Chat: React.FC = () => {
  const [messages, setMessages] = useState<{ role: string; content: string }[]>(
    []
  );
  const [userMessage, setUserMessage] = useState("");
  const [loading, setLoading] = useState(false);

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
  return (
    <Container>
      <ChatArea>
        {messages.map((message, index) => (
          <div key={index}>
            <p>{message.content}</p>
          </div>
        ))}
      </ChatArea>
      <InputArea>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Digite sua mensagem..."
          value={userMessage}
          onChange={(e) => setUserMessage(e.target.value)}
        />
        <IconButton
          color="primary"
          onClick={handleSendMessage}
          disabled={loading}
        >
          <SendIcon />
        </IconButton>
      </InputArea>
    </Container>
  );
};

export default Chat;
