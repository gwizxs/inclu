import type { Meta, StoryObj } from '@storybook/react';
import { Sidebar } from './Sidebar';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta: Meta<typeof Sidebar> = {
    title: 'widgets/Sidebar',
    component: Sidebar,
}

export default meta;
type Story = StoryObj<typeof Sidebar>;

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