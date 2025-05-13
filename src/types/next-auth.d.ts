import { DefaultSession } from "next-auth";

declare module "next-auth" {
  /**
   * Estende o tipo de usuário padrão da sessão
   */
  interface User {
    id: string;
    name: string;
    email: string;
    role?: string;
  }

  interface Session {
    user: {
      id: string;
      name: string;
      email: string;
      role?: string;
    } & DefaultSession["user"];
  }
}

declare module "next-auth/jwt" {
  /**
   * Estende o tipo padrão do token JWT
   */ interface JWT {
    id?: string;
    role?: string;
  }
}
