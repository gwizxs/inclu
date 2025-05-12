import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Article, ArticleType } from '@/entities/Article';
import { ArticleRecommendationsList } from './ArticleRecommendationsList';
import img from '@/shared/assets/tests/avatar.jpg'
const meta: Meta<typeof ArticleRecommendationsList> = {
    title: 'features/ArticleRecommendationsList',
    component: ArticleRecommendationsList,
    argTypes: {
        className: { control: 'text' },
    },
    decorators: [
        (Story) => {
            return <Story />;
        },
    ],
};

export default meta;
type Story = StoryObj<typeof ArticleRecommendationsList>;

const articles: Article[] = [
    {
        id: '1',
        img: img,
        createdAt: '2023-05-15',
        views: 1023,
        user: { id: '1', username: 'admin' },
        blocks: [],
        type: [ArticleType.IT],
        title: 'Основы React в 2025 году',
        subtitle: 'Что нужно знать современному разработчику',
    },
    {
        id: '2',
        img: img,
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
        img: img,
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
                url: `http://localhost:8000/articles/recommendations?_limit=3`,
                method: 'GET',
                status: 200,
                response: articles,
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
