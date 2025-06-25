import type { Meta, StoryObj } from '@storybook/react';
import { ModelSelector } from "./ModelSelector";
import { ModelOptions } from "./types";
import CloudeIcon from "../Icons/ClaudeIcon";
import ChatGPTIcon from "../Icons/ChatGPTIcon";
import GeminiIcon from "../Icons/GeminiIcon";
import { useState } from 'react';

const StoryOptions: ModelOptions[] = [
  { value: "gpt-4", label: "GPT-4", isDisabled: false, icon: <ChatGPTIcon /> },
  { value: "claude", label: "Claude", isDisabled: false, icon: <CloudeIcon /> },
  { value: "gemini", label: "Gemini", isDisabled: false, icon: <GeminiIcon /> },
];

const Render = () => {
  const [selectedModel, setSelectedModel] = useState(StoryOptions[0].value);

  return (
    <ModelSelector
      selectedModel={selectedModel}
      onModelChange={setSelectedModel}
      options={StoryOptions}
    />
  );
};

const meta = {
  title: 'Components/ModelSelector',
  component: ModelSelector,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    selectedModel: StoryOptions[0].value,
    onModelChange: (model) => { console.log('Model changed to:', model); },
    options: StoryOptions,
  },
  render: Render,
} satisfies Meta<typeof ModelSelector>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
