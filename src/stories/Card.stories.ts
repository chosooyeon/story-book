import type { Meta, StoryObj } from '@storybook/react';
import { Card } from '../components/Card/Card';

const meta = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Patient Card',
    content: 'This is a brief description of the patient.',
  },
};

export const Clickable: Story = {
  args: {
    title: 'Clickable Card',
    content: 'Click here for more details.',
    onClick: () => alert('Card clicked!'),
  },
};