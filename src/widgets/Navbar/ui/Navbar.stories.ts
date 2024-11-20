import type { Meta, StoryObj } from '@storybook/react';
import Navbar from './Navbar';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

const meta: Meta<typeof Navbar> = {
    title: 'widgets/Navbar',
    component: Navbar,
}

export default meta;
type Story = StoryObj<typeof Navbar>;

export const Light: Story = {
    decorators: [
        StoreDecorator({})
    ]
};

export const Dark: Story = {
    decorators: [
        StoreDecorator({})
    ]
};

Light.decorators = [
    (Story) => ThemeDecorator(Theme.LIGHT)(Story),
]

Dark.decorators = [
    (Story) => ThemeDecorator(Theme.DARK)(Story),
]