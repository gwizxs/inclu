
import type { Meta, StoryObj } from '@storybook/react';
import LoginForm from './LoginForm';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta: Meta<typeof LoginForm> = {
    title: 'features/LoginForm',
    component: LoginForm,
}

export default meta;
type Story = StoryObj<typeof LoginForm>;

export const Light: Story = {
};

export const Dark: Story = {

};

Light.decorators = [
    ThemeDecorator(Theme.LIGHT)
]

Dark.decorators = [
    ThemeDecorator(Theme.DARK)
]