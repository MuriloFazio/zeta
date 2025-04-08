"use client";

import React, { useState } from "react";

import { AuthFormLayout } from "../Auth/AuthFormLayout";
import { Input } from "../Auth/styles";

export const SignInForm: React.FC = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      setError("Please fill in all fields");
      return;
    }
    setError("");
    // Handle authentication here
    console.log("Login data:", formData);
  };

  return (
    <AuthFormLayout
      title="Login"
      onSubmit={handleSubmit}
      error={error}
      footerText="Não tem uma conta?"
      footerLinkText="Cadastre-se"
      footerLinkHref="/register"
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
    </AuthFormLayout>
  );
};
