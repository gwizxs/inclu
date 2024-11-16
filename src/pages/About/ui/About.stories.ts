import type { Meta, StoryObj } from '@storybook/react';
import About from './About';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta: Meta<typeof About> = {
    title: 'pages/About',
    component: About,
}

export default meta;
type Story = StoryObj<typeof About>;

export const Light: Story = {

};

export const Dark: Story = {

};

Light.decorators = [
    (Story) => ThemeDecorator(Theme.LIGHT)(Story),
]

Dark.decorators = [
    (Story) => ThemeDecorator(Theme.DARK)(Story),
]