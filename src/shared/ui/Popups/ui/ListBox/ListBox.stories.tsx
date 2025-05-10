import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { ListBox } from './ListBox';

const meta = {
    title: 'shared/Popups/ListBox',
    component: ListBox,
    parameters: {
        layout: 'centered',
    },
    decorators: [
        (Story: React.ComponentType) => <div style={{ padding: '6.25rem' }}><Story /></div>,
    ],
} satisfies Meta<typeof ListBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {
        value: '123',
        items: [
            { content: '1asfasfasf23', value: '123' },
            { content: '1asfasfasf21233', value: '1232' },
        ],
        onChange: action('onChange'),
    },
};

export const TopLeft: Story = {
    args: {
        direction: 'top left',
        value: '123',
        items: [
            { content: '1asfasfasf23', value: '123' },
            { content: '1asfasfasf21233', value: '1232' },
        ],
        onChange: action('onChange'),
    },
};

export const TopRight: Story = {
    args: {
        direction: 'top right',
        value: '123',
        items: [
            { content: '1asfasfasf23', value: '123' },
            { content: '1asfasfasf21233', value: '1232' },
        ],
        onChange: action('onChange'),
    },
};

export const BottomLeft: Story = {
    args: {
        direction: 'bottom left',
        value: '123',
        items: [
            { content: '1asfasfasf23', value: '123' },
            { content: '1asfasfasf21233', value: '1232' },
        ],
        onChange: action('onChange'),
    },
};

export const BottomRight: Story = {
    args: {
        direction: 'bottom right',
        value: '123',
        items: [
            { content: '1asfasfasf23', value: '123' },
            { content: '1asfasfasf21233', value: '1232' },
        ],
        onChange: action('onChange'),
    },
};
