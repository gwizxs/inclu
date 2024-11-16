import type { Meta, StoryObj } from '@storybook/react';
import ThemeSwitcher from './ThemeSwitcher';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta: Meta<typeof ThemeSwitcher> = {
    title: 'widgets/ThemeSwitcher',
    component: ThemeSwitcher,
}

export default meta;
type Story = StoryObj<typeof ThemeSwitcher>;

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