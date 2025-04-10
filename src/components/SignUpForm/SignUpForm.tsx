"use client";

import React, { useState } from "react";
import { AuthFormLayout } from "../Auth/AuthFormLayout";
import { Input } from "../Auth/styles";
import { useRouter } from "next/navigation";

export const SignUpForm: React.FC = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    setError("");

    const response = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        password: formData.password,
      }),
    });

    if (response.status === 201) {
      setError("");
      router.push("/");
      console.log("User registered successfully");
    } else if (response.status === 400) {
      setError("An error occurred. Please try again.");
    }
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
        type="name"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        required
      />
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
