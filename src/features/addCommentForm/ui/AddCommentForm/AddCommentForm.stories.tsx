import type { Meta, StoryObj } from '@storybook/react';
import AddCommentForm from './AddCommentForm';
import { fn } from '@storybook/test';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

const meta: Meta<typeof AddCommentForm> = {
    title: 'pages/AddCommentForm',
    component: AddCommentForm,
}

export default meta;
type Story = StoryObj<typeof AddCommentForm>;

export const Primary: Story = {
    args: {
        onSendComment: fn(),
    }
};

export const Dark: Story = {
    decorators: [
        StoreDecorator({}),
    ]
};
