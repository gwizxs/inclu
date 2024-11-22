import type { Meta, StoryObj } from '@storybook/react';
import Main from './Main';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta: Meta<typeof Main> = {
    title: 'pages/Main',
    component: Main,
}

export default meta;
type Story = StoryObj<typeof Main>;

export const Light: Story = {

};

export const Dark: Story = {

};

Light.decorators = [
    ThemeDecorator(Theme.LIGHT),
]

Dark.decorators = [
    ThemeDecorator(Theme.DARK),
]