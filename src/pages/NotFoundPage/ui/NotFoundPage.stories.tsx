import type { Meta, StoryObj } from '@storybook/react';
import NotFoundPage from './NotFoundPage';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta: Meta<typeof NotFoundPage> = {
    title: 'pages/NotFoundPage',
    component: NotFoundPage,
}

export default meta;
type Story = StoryObj<typeof NotFoundPage>;

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