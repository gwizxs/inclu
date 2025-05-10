import type { Meta, StoryObj } from '@storybook/react';
import { NotificationItem } from './NotificationItem';

const meta: Meta<typeof NotificationItem> = {
    title: 'entities/Notifications/NotificationItem',
    component: NotificationItem,
    argTypes: {
        className: { control: 'text' },
    },
};

export default meta;
type Story = StoryObj<typeof NotificationItem>;

export const Primary: Story = {
    args: {
        item: {
            id: '1',
            title: 'Уведомление',
            description: 'Описание уведомления',
        },
    },
};

export const WithLink: Story = {
    args: {
        item: {
            id: '2',
            title: 'Уведомление со ссылкой',
            description: 'Нажмите, чтобы перейти по ссылке',
            href: 'https://example.com',
        },
    },
};
