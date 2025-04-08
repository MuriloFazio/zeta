"use client";

import React, { useState } from "react";
import { StyledButton, ErrorMessage, Form, Input, Title } from "./styles";

export const SignInForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }
    setError("");
    // Handle authentication here
    console.log("Email:", email, "Password:", password);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Title>Login</Title>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <Input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <StyledButton type="submit">Login</StyledButton>
    </Form>
  );
};

export default SignInForm;
