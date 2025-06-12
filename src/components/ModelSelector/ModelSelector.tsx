import React, { useState } from "react";
import { StyledSelect, StyledMenuItem, IconWrapper } from "./styles";
import { ModelSelectorProps } from "./types";
import CloudeIcon from "../Icons/ClaudeIcon";
import ChatGPTIcon from "../Icons/ChatGPTIcon";
import GeminiIcon from "../Icons/GeminiIcon";

export const ModelSelector: React.FC<ModelSelectorProps> = ({
  defaultModel = "gpt-4",
}) => {
  const [selectedModel, setSelectedModel] = useState(defaultModel);

  const handleChange = (model: string) => {
    setSelectedModel(model);
  };

  return (
    <StyledSelect 
      value={selectedModel}
      onChange={(event) => handleChange(event.target.value as string)}
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