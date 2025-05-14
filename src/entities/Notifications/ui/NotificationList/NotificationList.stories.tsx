import type { Meta, StoryObj } from '@storybook/react';
import { NotificationList } from './NotificationList';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

const meta: Meta<typeof NotificationList> = {
    title: 'entities/Notifications/NotificationList',
    component: NotificationList,
    argTypes: {
        className: { control: 'text' },
    },
    decorators: [
        StoreDecorator({
            user: {
                authData: {
                    id: '1',
                },
            },
        }),
        ThemeDecorator(Theme.LIGHT),
    ],
    parameters: {
        mockData: [
            {
                url: 'http://localhost:8000/notifications',
                method: 'GET',
                status: 200,
                response: [
                    {
                        id: '1',
                        title: 'Notification 1',
                        description: 'Description 1',
                        userId: '1',
                        href: '#',
                    },
                    {
                        id: '2',
                        title: 'Notification 2',
                        description: 'Description 2',
                        userId: '1',
                        href: '#',
                    },
                    {
                        id: '3',
                        title: 'Notification 3',
                        description: 'Description 3',
                        userId: '1',
                        href: '#',
                    },
                ],
            },
            {
                url: 'http://localhost:8000/notifications',
                method: 'GET',
                status: 200,
                response: [
                    {
                        id: '1',
                        title: 'Notification 1',
                        description: 'Description 1',
                        userId: '1',
                        href: '#',
                    },
                    {
                        id: '2',
                        title: 'Notification 2',
                        description: 'Description 2',
                        userId: '1',
                        href: '#',
                    },
                    {
                        id: '3',
                        title: 'Notification 3',
                        description: 'Description 3',
                        userId: '1',
                        href: '#',
                    },
                ],
            },
        ],
    },
};

export default meta;
type Story = StoryObj<typeof NotificationList>;

export const Primary: Story = {
    args: {},
};

export const WithLink: Story = {
    args: {
        className: 'WithLink',
    },
    parameters: {
        mockData: [
            {
                url: 'http://localhost:8000/notifications',
                method: 'GET',
                status: 200,
                response: [
                    {
                        id: '1',
                        title: 'Notification 1',
                        description: 'Description 1',
                        userId: '1',
                        href: '#',
                    },
                ],
            },
            {
                url: 'http://localhost:8000/notifications',
                method: 'GET',
                status: 200,
                response: [
                    {
                        id: '1',
                        title: 'Notification 1',
                        description: 'Description 1',
                        userId: '1',
                        href: '#',
                    },
                ],
            },
        ],
    },
};
