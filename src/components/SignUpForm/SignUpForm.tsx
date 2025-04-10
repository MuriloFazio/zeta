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
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError("Senhas não coincidem");
      return;
    }

    setError("");
    setIsLoading(true);

    try {
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

      const data = await response.json();

      if (response.ok) {
        // Registro bem-sucedido, redirecionar para a página de login
        router.push(
          "/login?success=Conta criada com sucesso! Faça login para continuar."
        );
      } else {
        // Mostrar mensagem de erro do servidor
        setError(
          data.error || "Ocorreu um erro durante o registro. Tente novamente."
        );
      }
    } catch (err) {
      console.error("Erro ao registrar:", err);
      setError("Erro de conexão. Verifique sua internet e tente novamente.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthFormLayout
      title="Cadastro"
      onSubmit={handleSubmit}
      error={error}
      footerText="Já tem uma conta?"
      footerLinkText="Login"
      footerLinkHref="/login"
    >
      <Input
        type="text"
        name="name"
        placeholder="Nome"
        value={formData.name}
        onChange={handleChange}
        required
        disabled={isLoading}
      />
      <Input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
        disabled={isLoading}
      />
      <Input
        type="password"
        name="password"
        placeholder="Senha"
        value={formData.password}
        onChange={handleChange}
        required
        disabled={isLoading}
      />
      <Input
        type="password"
        name="confirmPassword"
        placeholder="Confirmar Senha"
        value={formData.confirmPassword}
        onChange={handleChange}
        required
        disabled={isLoading}
      />
    </AuthFormLayout>
  );
};
