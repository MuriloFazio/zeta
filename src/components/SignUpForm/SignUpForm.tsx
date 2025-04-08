"use client";

import React, { useState } from "react";
import { AuthFormLayout } from "../Auth/AuthFormLayout";
import { Input } from "../Auth/styles";

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
    <AuthFormLayout
      title="Sign Up"
      onSubmit={handleSubmit}
      error={error}
      footerText="Já tem uma conta?"
      footerLinkText="Login"
      footerLinkHref="/login"
    >
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
    </AuthFormLayout>
  );
};
