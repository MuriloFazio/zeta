"use client";
import React from "react";
import { AuthFormLayoutProps } from "./types";
import {
  Form,
  Title,
  ErrorMessage,
  FormWrapper,
  StyledText,
  StyledButton,
  StyledLink,
  Card,
} from "./styles";
import { AuthDivider } from "./AuthDivider";

export const AuthFormLayout: React.FC<AuthFormLayoutProps> = ({
  title,
  children,
  footerText,
  footerLinkText,
  footerLinkHref,
  onSubmit,
  error,
}) => {
  return (
    <FormWrapper>
      <Form onSubmit={onSubmit}>
        <Title>{title}</Title>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        {children}
        <StyledButton type="submit">
          {title === "Login" ? "Entrar" : "Crie sua conta"}
        </StyledButton>
        <AuthDivider />
        <StyledButton>Google</StyledButton>
      </Form>
      <Card>
        <StyledText>{footerText}</StyledText>
        <StyledLink href={footerLinkHref}>{footerLinkText}</StyledLink>
      </Card>
    </FormWrapper>
  );
};
