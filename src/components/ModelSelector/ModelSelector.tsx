import React from "react";
import { StyledSelect, StyledMenuItem, IconWrapper } from "./styles";
import { ModelSelectorProps } from "./types";
import CloudeIcon from "../Icons/ClaudeIcon";
import ChatGPTIcon from "../Icons/ChatGPTIcon";
import GeminiIcon from "../Icons/GeminiIcon";
import { AIModel } from "@/types/model";

export const ModelSelector: React.FC<ModelSelectorProps> = ({
  onModelChange,
  selectedModel = "gpt-4",
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
      <StyledMenuItem value="gpt-4">
        <IconWrapper>
          GPT-4
          <ChatGPTIcon />
        </IconWrapper>
      </StyledMenuItem>
      <StyledMenuItem value="gemini">
        <IconWrapper>
          Gemini
          <GeminiIcon />
        </IconWrapper>
      </StyledMenuItem>
      <StyledMenuItem value="claude">
        <IconWrapper>
          Claude
          <CloudeIcon />
        </IconWrapper>
      </StyledMenuItem>
    </StyledSelect>
  );
};

export default ModelSelector;