
import type { Meta, StoryObj } from '@storybook/react';
import ProfilePage from './ProfilePage';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import avatar from '../../../shared/assets/tests/avatar.jpg'

const meta: Meta<typeof ProfilePage> = {
    title: 'pages/ProfilePage',
    component: ProfilePage,
}

export default meta;

type Story = StoryObj<typeof ProfilePage>;

export const Light: Story = {
    decorators: [
        ThemeDecorator(Theme.LIGHT),
        StoreDecorator({
            profile: {
                form: {
                    avatar: avatar,
                    username: 'admin',
                    first: 'admin',
                    lastname: 'admin',
                    age: 22,
                    city: 'Moscow',
                    currency: Currency.RUB,
                    country: Country.Russia
                }
            }
        })
    ]
};

export const Dark: Story = {
    decorators: [
        ThemeDecorator(Theme.DARK),
        StoreDecorator({
            profile: {
                form: {
                    avatar: avatar,
                    username: 'admin',
                    first: 'admin',
                    lastname: 'admin',
                    age: 22,
                    city: 'Moscow',
                    currency: Currency.RUB,
                    country: Country.Russia
                }
            }
        })
    ]
};