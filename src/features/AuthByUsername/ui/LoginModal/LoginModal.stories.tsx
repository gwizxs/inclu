import type { Meta, StoryObj } from '@storybook/react';
import { LoginModal } from './LoginModal';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

const meta: Meta<typeof LoginModal> = {
    title: 'features/AuthByUsername/LoginModal',
    component: LoginModal,
    argTypes: {
        className: { control: 'text' },
    },
    decorators: [
        StoreDecorator({
            loginForm: {
                username: 'user',
                password: '1',
            },
        }),
    ],
};

export default meta;
type Story = StoryObj<typeof LoginModal>;

export const Primary: Story = {
    args: {
        isOpen: true,
        onClose: () => {},
    },
};
