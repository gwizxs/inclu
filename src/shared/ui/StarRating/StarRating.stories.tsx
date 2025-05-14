import type { Meta, StoryObj } from '@storybook/react';
import { StarRating } from './StarRating';

const meta: Meta<typeof StarRating> = {
    title: 'shared/StarRating',
    component: StarRating,
};

export default meta;
type Story = StoryObj<typeof StarRating>;

export const Default: Story = {
    args: {
        selectedStars: 0,
        size: 30,
    },
};

export const Rating4: Story = {
    args: {
        selectedStars: 4,
        size: 30,
    },
};

export const Rating5: Story = {
    args: {
        selectedStars: 5,
        size: 30,
    },
};

export const Rating3: Story = {
    args: {
        selectedStars: 3,
        size: 30,
    },
};

export const Rating2: Story = {
    args: {
        selectedStars: 2,
        size: 30,
    },
};

export const Rating1: Story = {
    args: {
        selectedStars: 1,
        size: 30,
    },
};
