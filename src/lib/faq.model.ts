import mongoose, { Schema, Document } from "mongoose";

export interface IFaq extends Document {
  pergunta: string;
  resposta: string;
  categoria?: string;
  embedding?: number[];
  atualizadoEm: Date;
}

const FaqSchema = new Schema<IFaq>({
  pergunta: { type: String, required: true },
  resposta: { type: String, required: true },
  categoria: { type: String },
  embedding: { type: [Number], required: true },
  atualizadoEm: { type: Date, default: Date.now },
});

export const Faq =
  mongoose.models.Faq || mongoose.model<IFaq>("Faq", FaqSchema);
