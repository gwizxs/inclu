import type { Meta, StoryObj } from '@storybook/react';
import { Button, ThemeButton } from './Button';

const meta: Meta<typeof Button> = {
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