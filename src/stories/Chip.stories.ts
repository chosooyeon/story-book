// Chip.stories.ts
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Chip } from '../components/Chip/Chip';

const meta = {
  title: 'Components/Chip',
  component: Chip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    onDelete: { action: 'deleted' },
  },
} satisfies Meta<typeof Chip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Default Chip',
  },
};

export const Primary: Story = {
  args: {
    label: 'Primary Chip',
    color: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Secondary Chip',
    color: 'secondary',
  },
};

export const WithDelete: Story = {
  args: {
    label: 'Chip with Delete',
    onDelete: fn(),
  },
};
