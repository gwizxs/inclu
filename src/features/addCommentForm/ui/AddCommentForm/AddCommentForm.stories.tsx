import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import AddCommentForm from './AddCommentForm';

const meta: Meta<typeof AddCommentForm> = {
  title: 'features/AddCommentForm',
  component: AddCommentForm,
  decorators: [StoreDecorator({})],
};

export default meta;
type Story = StoryObj<typeof AddCommentForm>;

export const Primary: Story = {
  args: {
    onSendComment: fn(),
  },
};

export const Dark: Story = {
  args: {
    onSendComment: fn(),
  },
  decorators: [StoreDecorator({}), ThemeDecorator(Theme.DARK)],
};
