import mongoose, { Schema, Document } from "mongoose";

// Definição da interface para TypeScript
export interface IFaq extends Document {
  pergunta: string;
  resposta: string;
  categoria?: string;
  embedding?: number[];
  atualizadoEm: Date;
}

// Criando o Schema do MongoDB
const FaqSchema = new Schema<IFaq>({
  pergunta: { type: String, required: true },
  resposta: { type: String, required: true },
  categoria: { type: String },
  embedding: { type: [Number] }, // Adicionando campo de embedding
  atualizadoEm: { type: Date, default: Date.now },
});

// Exportando o modelo para ser usado na API
export const Faq =
  mongoose.models.Faq || mongoose.model<IFaq>("Faq", FaqSchema);
