import type { Meta, StoryObj } from '@storybook/react';
import { NotificationList } from './NotificationList';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

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
    ],
};

export default meta;
type Story = StoryObj<typeof NotificationList>;

export const Primary: Story = {
    args: {},
    parameters: {
        mockData: [
            {
                url: `${__API__}/notifications`,
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
                        id: '1',
                        title: 'Notification 1',
                        description: 'Description 1',
                        userId: '1',
                        href: '#',
                    },
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

export const WithLink: Story = {
    args: {
        className: 'WithLink',
    },
    parameters: {
        mockData: [
            {
                url: `${__API__}/notifications`,
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
