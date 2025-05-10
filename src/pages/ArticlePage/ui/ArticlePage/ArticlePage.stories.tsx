import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import ArticlePage from './ArticlePage';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ArticleType } from '@/entities/Article';

const meta: Meta<typeof ArticlePage> = {
    title: 'pages/ArticlePage',
    component: ArticlePage,
    argTypes: {
        className: { control: 'text' },
    },
    decorators: [
        (Story) => (
            <div style={{ width: '100%', height: '100%' }}>
                <Story />
            </div>
        ),
        StoreDecorator({
            articleDetails: {
                data: {
                    id: '1',
                    title: 'Article 1',
                    subtitle: 'Subtitle 1',
                    img: 'https://example.com/images/article1.jpg',
                    user: { id: '1', username: 'admin' },
                    blocks: [],
                    type: [ArticleType.IT],
                    createdAt: '2023-05-15',
                    views: 1023,
                },
            },
        }),
    ],
};

export default meta;
type Story = StoryObj<typeof ArticlePage>;

export const Light: Story = {
    decorators: [
        ThemeDecorator(Theme.LIGHT),
    ],
};

export const Dark: Story = {
    decorators: [
        ThemeDecorator(Theme.DARK),
    ],
    parameters: {
        mockData: [
            {
                url: `${__API__}/articles/recommendations`,
                method: 'GET',
                status: 200,
                response: [
                    {
                        id: '1',
                        title: 'Article 1',
                        subtitle: 'Subtitle 1',
                        img: 'https://example.com/images/article1.jpg',
                        user: { id: '1', username: 'admin' },
                        views: 1023,
                        createdAt: '2023-05-15',
                        type: [ArticleType.IT],
                        blocks: [],
                    },
                    {
                        id: '2',
                        title: 'Article 1',
                        subtitle: 'Subtitle 1',
                        img: 'https://example.com/images/article1.jpg',
                        user: { id: '1', username: 'admin' },
                        views: 1023,
                        createdAt: '2023-05-15',
                        type: [ArticleType.IT],
                        blocks: [],
                    },
                    {
                        id: '3',
                        title: 'Article 1',
                        subtitle: 'Subtitle 1',
                        img: 'https://example.com/images/article1.jpg',
                        user: { id: '1', username: 'admin' },
                        views: 1023,
                        createdAt: '2023-05-15',
                        type: [ArticleType.IT],
                        blocks: [],
                    },
                ],
            },
        ],
    },
};
