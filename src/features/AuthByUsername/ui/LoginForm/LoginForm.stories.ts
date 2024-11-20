import type { Meta, StoryObj } from '@storybook/react';
import {LoginForm} from './LoginForm';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

const meta: Meta<typeof LoginForm> = {
    title: 'features/LoginForm',
    component: LoginForm,
}

export default meta;
type Story = StoryObj<typeof LoginForm>;

export const Primary: Story = {

};

export const Dark: Story = {
};
 
Dark.decorators = [
    (Story) => ThemeDecorator(Theme.DARK)(Story),
]


Primary.decorators = [
    StoreDecorator({
        loginForm: {
            username: '123',
            password: '123'
        }
    })
]

Dark.decorators = [
    StoreDecorator({
        loginForm: {
            username: '123',
            password: '123'
        }
    })
]