import type { Meta, StoryObj } from '@storybook/react';
import { HStack } from './HStack';

const meta: Meta<typeof HStack> = {
  title: 'shared/Stack/HStack',
  component: HStack,
};

export default meta;
type Story = StoryObj<typeof HStack>;

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
