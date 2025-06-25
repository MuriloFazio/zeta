import React from "react";
import { StyledSelect, StyledMenuItem, IconWrapper } from "./styles";
import { ModelSelectorProps } from "./types";
import { AIModel } from "@/types/model";
import {MODEL_OPTIONS} from "./ModelSelectorOptions";

export const ModelSelector: React.FC<ModelSelectorProps> = ({
  onModelChange,
  selectedModel,
  options = MODEL_OPTIONS,
}) => {
  
  return (
    <StyledSelect 
      aria-label="Selecionar modelo de IA"
      value={selectedModel}
      onChange={(event) => onModelChange(event.target.value as AIModel)}
      autoWidth
      MenuProps={{
        PaperProps: {
          sx: {
            bgcolor: '#333',
            '& .MuiMenuItem-root': {
              color: '#fff',
            },
          },
        },
      }}
    >
      {options.map((option) => (
        <StyledMenuItem key={option.value} value={option.value} disabled={option.isDisabled}>
          <IconWrapper>
            {option.label}
            {option.icon}
          </IconWrapper>
        </StyledMenuItem>
      ))}
    </StyledSelect>
  );
};

export default ModelSelector;