"use client";

import React from "react";
import { Container } from "./styles";
import { SignUpForm } from "@/components/SignUpForm";

const AuthPage: React.FC = () => {
  return (
    <Container>
      <SignUpForm></SignUpForm>
    </Container>
  );
};

export default AuthPage;
