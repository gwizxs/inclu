import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Article, ArticleType } from '@/entities/Article';
import { ArticleRecommendationsList } from './ArticleRecommendationsList';
import { QueryStatus } from '@reduxjs/toolkit/dist/query';

const meta: Meta<typeof ArticleRecommendationsList> = {
    title: 'features/ArticleRecommendationsList',
    component: ArticleRecommendationsList,
    argTypes: {
        className: { control: 'text' },
    },
};

export default meta;
type Story = StoryObj<typeof ArticleRecommendationsList>;

const articles: Article[] = [
    {
        id: '1',
        img: 'https://example.com/images/react.jpg',
        createdAt: '2023-05-15',
        views: 1023,
        user: { id: '1', username: 'admin' },
        blocks: [],
        type: [ArticleType.IT],
        title: 'Основы React в 2023 году',
        subtitle: 'Что нужно знать современному разработчику',
    },
    {
        id: '2',
        img: 'https://example.com/images/typescript.jpg',
        createdAt: '2023-06-20',
        views: 845,
        user: { id: '2', username: 'developer' },
        blocks: [],
        type: [ArticleType.IT],
        title: 'TypeScript для профессионалов',
        subtitle: 'Продвинутые техники типизации',
    },
    {
        id: '3',
        img: 'https://example.com/images/economy.jpg',
        createdAt: '2023-07-10',
        views: 567,
        user: { id: '3', username: 'economist' },
        blocks: [],
        type: [ArticleType.ECONOMICS],
        title: 'Тренды экономики в IT-сфере',
        subtitle: 'Как технологии влияют на рынок труда',
    },
];

export const Normal: Story = {
    args: {},
    parameters: {
        mockData: [
            {
                url: `${__API__}/articles/recommendations`,
                method: 'GET',
                status: 200,
                response: articles,
            },
            {
                url: `${__API__}/articles?_expand=user&_page=2&_limit=9&_sort=createdAt&_order=asc&q=`,
                method: 'GET',
                status: 200,
                response: [],
            },
            {
                url: `${__API__}/articles?_expand=user&_limit=3`,
                method: 'GET',
                status: 200,
                response: [],
            },
        ],
    },
    decorators: [
        StoreDecorator({
            articleDetails: {
                data: articles[0],
            },
        }),
    ],
};
