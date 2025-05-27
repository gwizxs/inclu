import type { Meta, StoryObj } from '@storybook/react';
import { NotificationsButton } from './NotificationsButton';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

const meta: Meta<typeof NotificationsButton> = {
  title: 'features/NotificationsButton',
  component: NotificationsButton,
  argTypes: {
    className: { control: 'text' },
  },
  decorators: [
    StoreDecorator({
      user: { authData: { id: '1', username: 'manager' } },
    }),
  ],
};

export default meta;
type Story = StoryObj<typeof NotificationsButton>;

export const Normal: Story = {
  args: {},
  decorators: [
    StoreDecorator({
      user: { authData: { id: '1', username: 'admin' } },
    }),
  ],
};

export const WithNotifications: Story = {
  args: {},
  parameters: {
    mockData: [
      {
        url: `${__API__}/notifications`,
        method: 'GET',
        status: 200,
        response: [
          { id: '1', title: 'Уведомление 1', description: 'Описание 1' },
          { id: '2', title: 'Уведомление 2', description: 'Описание 2' },
        ],
      },
    ],
  },
  decorators: [
    StoreDecorator({
      user: { authData: { id: '1', username: 'admin' } },
    }),
  ],
};
