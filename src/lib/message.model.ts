import mongoose, { Schema } from "mongoose";
import { AIModel, MessageRole } from "@/types/model";

export interface Message{
  userId: string;
  model: AIModel;
  role: MessageRole;
  content: string;
  createdAt: Date;
}

const MessageSchema = new Schema<Message>({
  userId: { type: String, required: true },
  model: {
    type: String,
    enum: ["gpt-4", "claude", "gemini"],
    required: true,
  },
  role: {
    type: String,
    enum: ["user", "assistant", "system"],
    required: true,
  },
  content: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export const Message =
  mongoose.models.Message || mongoose.model<Message>("Message", MessageSchema);