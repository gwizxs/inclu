import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './Avatar';
import avatar from '../../assets/tests/avatar.jpg';

const meta: Meta<typeof Avatar> = {
    title: 'shared/Avatar',
    component: Avatar,
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const PrimaryBig: Story = {
    args: {
        size: 200,
        src: avatar,
    },
};

export const Primary: Story = {
    args: {
        size: 100,
        src: avatar,
    },
};

export const PrimarySmall: Story = {
    args: {
        size: 50,
        src: avatar,
    },
};
