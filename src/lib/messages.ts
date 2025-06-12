import { AIModel, MessageRole } from "@/types/model";

export async function fetchMessages(userId: string, model: string) {
  const response = await fetch(`/api/messages/${model}?userId=${userId}`);
  if (!response.ok) throw new Error("Erro ao buscar mensagens");
  return await response.json();
};

export async function saveMessage({
  userId,
  model,
  role,
  content,
}: {
  userId: string;
  model: AIModel;
  role: MessageRole;
  content: string;
}) {
  await fetch("/api/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ userId, model, role, content }),
  });
};
