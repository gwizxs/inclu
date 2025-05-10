import type { Meta, StoryObj } from '@storybook/react';
import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';
import { ProfileCard } from './ProfileCard';
import avatar from '../../../../shared/assets/tests/avatar.jpg';

const meta: Meta<typeof ProfileCard> = {
    title: 'entities/Profile/ProfileCard',
    component: ProfileCard,
};

export default meta;
type Story = StoryObj<typeof ProfileCard>;

export const Light: Story = {

    args: {
        data: {
            avatar,
            username: 'admin',
            first: 'admin',
            lastname: 'admin',
            age: 22,
            city: 'Moscow',
            currency: Currency.RUB,
            country: Country.Russia,
        },
    },
};

export const WithError: Story = {

    args: {
        error: 'true',
    },
};

export const isLoading: Story = {

    args: {
        isLoading: true,
    },
};
