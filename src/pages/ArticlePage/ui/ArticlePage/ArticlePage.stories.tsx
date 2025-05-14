import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import ArticlePage from './ArticlePage';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ArticleType } from '@/entities/Article';
import img from '@/shared/assets/tests/avatar.jpg';

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
                    img,
                    user: { id: '1', username: 'admin' },
                    blocks: [],
                    type: [ArticleType.IT],
                    createdAt: '2023-05-15',
                    views: 1023,
                },
            },
        }),
    ],
    parameters: {
        mockData: [
            {
                url: 'http://localhost:8000/articles?_expand=user&_page=1&_limit=9&_sort=createdAt&_order=asc&q=',
                method: 'GET',
                status: 200,
                response: [
                    {
                        id: '1',
                        title: 'Article 1',
                        subtitle: 'Subtitle 1',
                        img,
                        user: { id: '1', username: 'admin' },
                        views: 1023,
                        createdAt: '2023-05-15',
                        type: [ArticleType.IT],
                        blocks: [],
                    },
                    {
                        id: '2',
                        title: 'Article 2',
                        subtitle: 'Subtitle 2',
                        img,
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
};
