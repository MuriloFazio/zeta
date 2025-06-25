import { ModelOptions } from "./types";
import CloudeIcon from "../Icons/ClaudeIcon";
import ChatGPTIcon from "../Icons/ChatGPTIcon";
import GeminiIcon from "../Icons/GeminiIcon";

export const MODEL_OPTIONS: ModelOptions[] = [
  { value: "gpt-4", label: "GPT-4", isDisabled: false, icon: <ChatGPTIcon /> },
  { value: "claude", label: "Claude", isDisabled: true, icon: <CloudeIcon /> },
  { value: "gemini", label: "Gemini", isDisabled: true, icon: <GeminiIcon /> },
];