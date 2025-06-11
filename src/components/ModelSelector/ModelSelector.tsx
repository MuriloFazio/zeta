import React from "react";
import { StyledSelect, StyledMenuItem, IconWrapper } from "./styles";
import { ModelSelectorProps } from "./types";
import CloudeIcon from "../Icons/ClaudeIcon";
import ChatGPTIcon from "../Icons/ChatGPTIcon";
import GeminiIcon from "../Icons/GeminiIcon";

export const ModelSelector: React.FC<ModelSelectorProps> = ({
  onModelChange,
  defaultModel = "gpt-4",
}) => {
  return (
      <StyledSelect defaultValue={defaultModel} onSelect={onModelChange} autoWidth>
        <StyledMenuItem value={"gpt-4"}>
          <IconWrapper>
            <>gpt-4</>
            <ChatGPTIcon />
          </IconWrapper>
        </StyledMenuItem>
        <StyledMenuItem value={"gemini"}>
          <IconWrapper>
            <>Gemini</>
            <GeminiIcon />
          </IconWrapper>
        </StyledMenuItem>
        <StyledMenuItem value={"cloude"}>
          <IconWrapper>
            <>Cloude</>
            <CloudeIcon />
          </IconWrapper>
        </StyledMenuItem>
      </StyledSelect>
  );
};

export default ModelSelector;
