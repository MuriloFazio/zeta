import { DefaultSession } from "next-auth";

declare module "next-auth" {
  /**
   * Estende o tipo de usuário padrão da sessão
   */
  interface Session {
    user: {
      id: string;
    } & DefaultSession["user"];
  }
}

declare module "next-auth/jwt" {
  /**
   * Estende o tipo padrão do token JWT
   */
  interface JWT {
    id?: string;
  }
}
