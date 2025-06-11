import type { Meta, StoryObj } from '@storybook/react';

import { ModelSelector } from "./ModelSelector";

const meta = {
  title: 'Components/ModelSelector',
  component: ModelSelector,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    onModelChange: () => {
      console.log("Model changed");
    },
  },
} satisfies Meta<typeof ModelSelector>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
