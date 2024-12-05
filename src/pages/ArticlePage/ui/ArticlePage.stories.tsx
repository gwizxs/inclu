
import type { Meta, StoryObj } from '@storybook/react';
import ArticlePage from './ArticlePage';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta: Meta<typeof ArticlePage> = {
    title: 'pages/ArticlePage',
    component: ArticlePage,
}

export default meta;
type Story = StoryObj<typeof ArticlePage>;

export const Light: Story = {
    decorators: [
        ThemeDecorator(Theme.LIGHT)
    ]
};

export const Dark: Story = {
    decorators: [
        ThemeDecorator(Theme.DARK)
    ]
};