import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY, // Adicione essa variável no .env.local
});

export async function gerarEmbedding(texto: string) {
  const response = await openai.embeddings.create({
    model: "text-embedding-ada-002",
    input: texto,
  });

  return response.data[0].embedding; // Retorna o vetor de embedding
}
