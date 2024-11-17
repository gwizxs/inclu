import type { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonSize, ThemeButton } from './Button';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta: Meta<typeof Button> = {
    title: 'shared/Button',
    component: Button,
}

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    args: {
        children: 'Button',
    },
};

export const Clear: Story = {
    args: {
        theme: ThemeButton.CLEAR,
        children: 'Button',
    },
};

export const Outline: Story = {
    args: {
        theme: ThemeButton.OUTLINE,
        children: 'Button',
    },
};

Outline.decorators = [
    (Story) => ThemeDecorator(Theme.LIGHT)(Story),
]

export const OutlineDark: Story = {
    args: {
        theme: ThemeButton.OUTLINE,
        children: 'Button',
    },
};

OutlineDark.decorators = [
    (Story) => ThemeDecorator(Theme.DARK)(Story),
]

export const Background: Story = {
    args: {
        theme: ThemeButton.BACKGROUND,
        children: 'Button',
    },
};
export const InvertedBackground: Story = {
    args: {
        theme: ThemeButton.BACKGROUND_INVERTED,
        children: 'Button',
    },
};

export const Square: Story = {
    args: {
        theme: ThemeButton.BACKGROUND_INVERTED,
        square: true,
        children: '>',
    },
};


export const SquareSizeM: Story = {
    args: {
        theme: ThemeButton.BACKGROUND_INVERTED,
        square: true,
        size: ButtonSize.M,
        children: '>',
    },
};

export const SquareSizeL: Story = {
    args: {
        theme: ThemeButton.BACKGROUND_INVERTED,
        square: true,
        size: ButtonSize.L,
        children: '>',
    },
};

export const SquareSizeXL: Story = {
    args: {
        theme: ThemeButton.BACKGROUND_INVERTED,
        square: true,
        size: ButtonSize.XL,
        children: '>',
    },
};

export const OutlineSizeL: Story = {
    args: {
        theme: ThemeButton.OUTLINE,
        children: 'Button',
        size: ButtonSize.L
    },
};

export const OutlineSizeXL: Story = {
    args: {
        theme: ThemeButton.OUTLINE,
        children: 'Button',
        size: ButtonSize.XL
    },
};