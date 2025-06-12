import type { Meta, StoryObj } from '@storybook/react';
import { ModelSelector } from "./ModelSelector";

const meta = {
  title: 'Components/ModelSelector',
  component: ModelSelector,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    defaultModel: 'gpt-4',
  },
} satisfies Meta<typeof ModelSelector>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
