"use client";

import React from "react";
import { Container } from "./styles";
import { SignInForm } from "@/components/SignInForm";

const AuthPage: React.FC = () => {
  return (
    <Container>
      <SignInForm></SignInForm>
    </Container>
  );
};

export default AuthPage;
