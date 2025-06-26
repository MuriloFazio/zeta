"use server";

import Anthropic from '@anthropic-ai/sdk';

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

export const getClaudeResponse = async (messages: string[]) => {
  try {
    const response = await anthropic.messages.create({
      model: "claude-sonnet-4-20250514",
      max_tokens: 1024,
      messages: messages.map((msg) => ({ role: "user", content: msg })),
    });

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    return response.content[0]?.text;
  } catch (error) {
    console.error("Erro na API da Anthropic:", error);
    throw error;
  }
};
