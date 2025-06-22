import type { Meta, StoryObj } from '@storybook/react';
import { Flex } from './Flex';

const meta: Meta<typeof Flex> = {
  title: 'shared/Stack/Flex',
  component: Flex,
};

export default meta;
type Story = StoryObj<typeof Flex>;

export const Row: Story = {
  args: {
    children: (
      <>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
      </>
    ),
  },
};

export const Column: Story = {
  args: {
    direction: 'column',
    children: (
      <div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
      </div>
    ),
  },
};

export const Gap8: Story = {
  args: {
    gap: '8px',
    children: (
      <div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
      </div>
    ),
  },
};

export const AlignEnd: Story = {
  args: {
    align: 'end',
    children: (
      <div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
      </div>
    ),
  },
};
