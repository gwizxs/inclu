import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';
import { Text } from '../Text/Text';

const meta: Meta<typeof Card> = {
  title: 'shared/Card',
  component: Card,
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Normal: Story = {
  args: {
    children: (
      <Text
        title="Title"
        text="Text fkjgoijejigoerg regoreniorjgjireigjerg ergoijreiojgre"
      />
    ),
  },
};
