import type { Meta, StoryObj } from '@storybook/react';
import { ThemeSwitcher } from './ThemeSwitcher';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta: Meta<typeof ThemeSwitcher> = {
    title: 'widgets/Sidebar',
    component: ThemeSwitcher,
}

export default meta;
type Story = StoryObj<typeof ThemeSwitcher>;

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