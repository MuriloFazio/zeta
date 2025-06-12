import { AIModel } from "@/types/model";

export type ModelSelectorProps = {
  selectedModel: AIModel;
  onModelChange: (model: AIModel) => void;
};