import type { Meta, StoryObj } from '@storybook/react';
import { ListBox } from './ListBox';

const meta: Meta<typeof ListBox> = {
    title: 'shared/ListBox',
    component: ListBox,
};

export default meta;
type Story = StoryObj<typeof ListBox>;

export const Light: Story = {
    args: {
        items: [
            { value: '1', content: 'first' },
            { value: '2', content: 'second' },
            { value: '3', content: 'third' },
        ],
    },
};
