import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import LoginForm from './LoginForm';

const meta: Meta<typeof LoginForm> = {
  title: 'features/AuthByUsername/LoginForm',
  component: LoginForm,
};

export default meta;
type Story = StoryObj<typeof LoginForm>;

export const Light: Story = {};

export const Dark: Story = {};

Light.decorators = [
  ThemeDecorator(Theme.LIGHT),
  StoreDecorator({
    loginForm: {
      username: '123',
      password: '123',
    },
  }),
];

Dark.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({
    loginForm: {
      username: '123',
      password: '123',
    },
  }),
];
