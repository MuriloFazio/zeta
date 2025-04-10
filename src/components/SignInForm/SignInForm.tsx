"use client";

import React, { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { AuthFormLayout } from "../Auth/AuthFormLayout";
import { Input } from "../Auth/styles";

export const SignInForm: React.FC = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      setError("Por favor, preencha todos os campos");
      return;
    }

    setError("");
    setIsLoading(true);

    try {
      // Usando o signIn do NextAuth em vez do login personalizado
      const result = await signIn("credentials", {
        redirect: false,
        email: formData.email,
        password: formData.password,
      });

      if (result?.error) {
        setError(result.error || "Falha na autenticação");
      } else {
        // Redireciona para o dashboard após login bem-sucedido
        router.push("/chat");
        // Opcionalmente, você pode atualizar a página para garantir que a sessão esteja atualizada
        router.refresh();
      }
    } catch (err) {
      setError("Ocorreu um erro durante o login");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
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
    </AuthFormLayout>
  );
};
