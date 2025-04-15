import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware() {
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
