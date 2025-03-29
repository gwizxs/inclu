import type { Meta, StoryObj } from '@storybook/react';
import { ListBox } from './ListBox';

const meta: Meta<typeof ListBox> = {
    title: 'shared/ListBox',
    component: ListBox,
};

export default meta;
type Story = StoryObj<typeof ListBox>;

export const BottomRight: Story = {
    args: {
        direction: 'bottom right',
        value: '1',
        items: [
            { value: '1', content: 'first' },
            { value: '2', content: 'second' },
            { value: '3', content: 'third' },
        ],
    },
};

export const TopRight: Story = {
    args: {
        direction: 'top right',
        value: '1',
        items: [
            { value: '1', content: 'first' },
            { value: '2', content: 'second' },
            { value: '3', content: 'third' },
        ],
    },
};

export const BottomLeft: Story = {
    args: {
        direction: 'bottom left',
        value: '1',
        items: [
            { value: '1', content: 'first' },
            { value: '2', content: 'second' },
            { value: '3', content: 'third' },
        ],
    },
};

export const TopLeft: Story = {
    args: {
        direction: 'top left',
        value: '1',
        items: [
            { value: '1', content: 'first' },
            { value: '2', content: 'second' },
            { value: '3', content: 'third' },
        ],
    },
};
