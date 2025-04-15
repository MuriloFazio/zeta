"use server";

import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function createEmbedding(texto: string) {
  const response = await openai.embeddings.create({
    model: "text-embedding-ada-002",
    input: texto,
  });

  return response.data[0].embedding;
}

export const getChatGPTResponse = async (prompt: string) => {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
    });

    return response.choices[0].message.content;
  } catch (error) {
    console.error("Erro na API da OpenAI:", error);
    throw error;
  }
};

export const classifyQuestion = async (pergunta: string) => {
  const systemPrompt = `
    Você é um assistente que classifica perguntas sobre a empresa XP.
    Se a pergunta for sobre a empresa XP, seus produtos, serviços ou políticas internas, responda "sim".
    Se for um assunto geral ou sobre outra empresa, responda "não".
  `;

  const resposta = await getChatGPTResponse(
    `${systemPrompt} Pergunta: ${pergunta}`
  );

  console.log("Resposta do ChatGPT:", resposta);

  return resposta && resposta.toLowerCase().includes("sim");
};
