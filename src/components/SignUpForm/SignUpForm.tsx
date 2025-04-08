"use client";

import React, { useState } from "react";
import {
  StyledButton,
  ErrorMessage,
  Form,
  Input,
  Title,
  Divider,
  Line,
  LineText,
  FormWrapper,
  StyledText,
  StyledLink,
  Card,
} from "../SignInForm/styles";
import GoogleIcon from "../../assets/icons/web_light_rd_na.svg";

export const SignUpForm: React.FC = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    setError("");
    // Handle sign-up logic here
    console.log("Sign-up successful:", formData);
  };

  return (
    <FormWrapper>
      <Form onSubmit={handleSubmit}>
        <Title>Sign Up</Title>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <Input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <Input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <Input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />
        <StyledButton type="submit">Crie sua conta</StyledButton>
        <Divider>
          <Line />
          <LineText>ou entre com</LineText>
          <Line />
        </Divider>
        <StyledButton>Google</StyledButton>
      </Form>
      <Card>
        <StyledText>Já tem uma conta?</StyledText>
        <StyledLink href={"/login"}>Login</StyledLink>
      </Card>
    </FormWrapper>
  );
};

export default SignUpForm;
