import type { Meta, StoryObj } from '@storybook/react';
import PageError from './PageError';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta: Meta<typeof PageError> = {
    title: 'widgets/PageError',
    component: PageError,
}

export default meta;
type Story = StoryObj<typeof PageError>;

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