// middleware.ts na raiz do projeto
import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  // Função executada apenas se o usuário não estiver autenticado
  function middleware(req) {
    // Você pode adicionar lógica personalizada aqui
    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token, // Retorna true se houver token válido
    },
  }
);

// Configura quais rotas serão protegidas
export const config = {
  matcher: ["/chat"],
};
