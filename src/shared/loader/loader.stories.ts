import type { Meta, StoryObj } from '@storybook/react';
import Loader from './loader';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta: Meta<typeof Loader> = {
    title: 'shared/Loader',
    component: Loader,
}

export default meta;
type Story = StoryObj<typeof Loader>;

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