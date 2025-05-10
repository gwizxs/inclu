import type { Meta, StoryObj } from '@storybook/react';
import { RatingCard } from './RatingCard';

const meta: Meta<typeof RatingCard> = {
    title: 'entities/RatingCard/RatingCard',
    component: RatingCard,
};

export default meta;
type Story = StoryObj<typeof RatingCard>;

export const Light: Story = {
    args: {
        title: 'Оцените статью',
        feedbackTitle: 'Оставьте свой отзыв',
        hasFeedback: true,
    },
};
