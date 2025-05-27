import type { Meta, StoryObj } from '@storybook/react';
import { EditableProfileCard } from './EditableProfileCard';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

const meta: Meta<typeof EditableProfileCard> = {
  title: 'features/editableProfileCard/EditableProfileCard',
  component: EditableProfileCard,
  argTypes: {
    className: { control: 'text' },
  },
  decorators: [
    StoreDecorator({
      user: { authData: { id: '1', username: 'admin' } },
    }),
  ],
};

export default meta;
type Story = StoryObj<typeof EditableProfileCard>;

export const Primary: Story = {
  args: {
    className: 'Primary',
  },
};
