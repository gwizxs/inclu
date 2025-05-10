import type { Meta, StoryObj } from '@storybook/react';
import { ArticleRating } from './ArticleRating';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

const meta: Meta<typeof ArticleRating> = {
    title: 'features/ArticleRating',
    component: ArticleRating,
};

export default meta;
type Story = StoryObj<typeof ArticleRating>;

export const Default: Story = {
    args: {
        articleId: '1',
    },
    decorators: [
        StoreDecorator({
            user: {
                authData: {
                    id: '1',
                },
            },
        }),
    ],
    parameters: {
        mockData: [
            {
                url: `${__API__}/article-ratings?userId=1&articleId=1`,
                method: 'GET',
                status: 200,
                response: [
                    {
                        id: '1',
                        rate: 1,
                    },
                ],
            },
        ],
    },
};
