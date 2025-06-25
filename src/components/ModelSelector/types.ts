import { AIModel } from "@/types/model";

export type ModelSelectorProps = {
  selectedModel: AIModel;
  onModelChange: (model: AIModel) => void;
  options?: ModelOptions[];
};

export type ModelOptions = {
  value: AIModel;
  label: string;
  isDisabled?: boolean;
  icon?: React.ReactNode;
};
