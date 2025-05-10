import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import PageError from './ErrorPage';

const meta: Meta<typeof PageError> = {
    title: 'widgets/PageError',
    component: PageError,
};

export default meta;
type Story = StoryObj<typeof PageError>;

export const Light: Story = {

};

export const Dark: Story = {
    
};

export const Orange: Story = {
    args: {
    },
};

Light.decorators = [
    ThemeDecorator(Theme.LIGHT),
];

Dark.decorators = [
    ThemeDecorator(Theme.DARK),
];

Orange.decorators = [
    ThemeDecorator(Theme.ORANGE),
];