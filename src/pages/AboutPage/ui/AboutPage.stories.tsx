import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import AboutPage from './AboutPage';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

const meta: Meta<typeof AboutPage> = {
    title: 'pages/AboutPage',
    component: AboutPage,
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
            user: {
                authData: {
                    id: '1',
                    username: 'admin',
                },
            },
        }),
    ],
};

export default meta;
type Story = StoryObj<typeof AboutPage>;

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
