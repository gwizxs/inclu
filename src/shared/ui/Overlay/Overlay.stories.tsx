import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from '@/app/providers/ThemeProvider';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Overlay } from './Overlay';

const meta: Meta<typeof Overlay> = {
    title: 'shared/Overlay',
    component: Overlay,
};

export default meta;
type Story = StoryObj<typeof Overlay>;

export const Primary: Story = {
    args: {
        onClick: () => {},
    },
};

export const Dark: Story = {
    args: {
        onClick: () => {},
    },
    decorators: [
        ThemeDecorator(Theme.DARK),
    ],
};
