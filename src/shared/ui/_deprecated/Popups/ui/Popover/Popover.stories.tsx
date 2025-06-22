import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@/shared/ui/_deprecated/Button';
import { Popover } from './Popover';

const meta = {
  title: 'shared/Popups/Popover',
  component: Popover,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story: React.ComponentType) => (
      <div style={{ padding: '6.25rem' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    trigger: <Button>Open</Button>,
    children: <div>Popover content</div>,
  },
};
