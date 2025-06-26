import { GoogleGenAI } from "@google/genai";

const gemini = new GoogleGenAI({ 
    apiKey: process.env.GOOGLE_API_KEY 
});

export const getGeminiResponse = async (prompt: string) => {
  try {
    const response = await gemini.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        thinkingConfig: {
          thinkingBudget: 0, // Disables thinking
        },
      },
    });

    if (
      response.candidates &&
      response.candidates[0] &&
      response.candidates[0].content &&
      response.candidates[0].content.parts &&
      response.candidates[0].content.parts[0] &&
      typeof response.candidates[0].content.parts[0].text === "string"
    ) {
      return response.candidates[0].content.parts[0].text;
    }
    return "No response available";
  } catch (error) {
    console.error("Erro na API do Gemini:", error);
    throw error;
  }
};

