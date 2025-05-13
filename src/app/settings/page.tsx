"use client";

import { PageContainer } from "./styles";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { UserAccessInfo } from "@/components/UserAccessInfo/UserAccessInfo";
import { UserInfoContainer } from "./styles";

export default function Settings() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    // Redireciona para a página de login se não estiver autenticado
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  if (!session) {
    return null;
  }
  return (
    <PageContainer>
      <UserInfoContainer>
        <UserAccessInfo
          name={session.user.name}
          src={session.user.image ?? undefined}
          infoText="Gerencie seu perfil"
        />
      </UserInfoContainer>
    </PageContainer>
  );
}
