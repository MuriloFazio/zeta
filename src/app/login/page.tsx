"use client";

import React from "react";
import { Container } from "./styles";
import { LoginForm } from "@/components/LoginForm";

const AuthPage: React.FC = () => {
  return (
    <Container>
      <LoginForm></LoginForm>
    </Container>
  );
};

export default AuthPage;
