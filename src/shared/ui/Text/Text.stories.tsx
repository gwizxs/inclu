import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { Text, TextSize, TextTheme } from './Text';

const meta: Meta<typeof Text> = {
    title: 'shared/Text',
    component: Text,
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Primary: Story = {
    args: {
        title: 'Title lorem ipsun',
        text: 'Description Description Description Description',
    },
};

export const Erorr: Story = {
    args: {
        title: 'Title lorem ipsun',
        text: 'Description Description Description Description',
        theme: TextTheme.ERROR,
    },
};

export const OnlyTitle: Story = {
    args: {
        title: 'Title lorem ipsun',
    },
};

export const OnlyText: Story = {
    args: {
        text: 'Description Description Description Description',
    },
};

export const PrimaryDark: Story = {
    args: {
        title: 'Title lorem ipsun',
        text: 'Description Description Description Description',
        theme: TextTheme.ERROR,
    },
    decorators: [
        ThemeDecorator(Theme.DARK),
    ],
};

export const OnlyTitleDark: Story = {
    args: {
        title: 'Title lorem ipsun',
    },
    decorators: [
        ThemeDecorator(Theme.DARK),
    ],
};

export const onlyTextDark: Story = {
    args: {
        title: 'Title lorem ipsun',
    },
    decorators: [
        ThemeDecorator(Theme.DARK),
    ],
};

export const SizeL: Story = {
    args: {
        title: 'Title lorem ipsun',
        text: 'Description Description Description Description',
        size: TextSize.L,
    },
};

export const SizeM: Story = {
    args: {
        title: 'Title lorem ipsun',
        text: 'Description Description Description Description',
        size: TextSize.M,
    },
};

export const SizeS: Story = {
    args: {
        title: 'Title lorem ipsun',
        text: 'Description Description Description Description',
        size: TextSize.S,
    },
};
