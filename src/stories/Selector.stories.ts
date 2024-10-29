import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Selector } from '../components/Selector/Selector';

const meta = {
  title: 'Example/Selector',
  component: Selector,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    options: { control: { type: 'object' } },
    onChange: { action: 'changed' },
  },
  args: { onChange: fn() },
} satisfies Meta<typeof Selector>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    options: ['Option 1', 'Option 2', 'Option 3'],
    label: 'Select an option',
  },
};

export const Disabled: Story = {
  args: {
    options: ['Option 1', 'Option 2', 'Option 3'],
    label: 'Select an option',
    disabled: true,
  },
};

export const WithCustomLabel: Story = {
  args: {
    options: ['Option 1', 'Option 2', 'Option 3'],
    label: 'Choose your option',
  },
};
