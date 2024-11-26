import type { Meta, StoryObj } from '@storybook/react';
import { Text, TextTheme } from './Text';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta: Meta<typeof Text> = {
    title: 'shared/Text',
    component: Text,
}

export default meta;
type Story = StoryObj<typeof Text>;

export const Primary: Story = {
    args: {
        title: 'Title lorem ipsun',
        text: 'Description Description Description Description',
    }
}

export const Erorr: Story = {
    args: {
        title: 'Title lorem ipsun',
        text: 'Description Description Description Description',
        theme: TextTheme.ERROR,
    }
}

export const OnlyTitle: Story = {
    args: {
        title: 'Title lorem ipsun',
    }
}

export const OnlyText: Story = {
    args: {
        text: 'Description Description Description Description',
    }
}

export const PrimaryDark: Story = {
    args: {
        title: 'Title lorem ipsun',
        text: 'Description Description Description Description',
        theme: TextTheme.ERROR,
    },
    decorators: [
        ThemeDecorator(Theme.DARK),
    ]
}

export const OnlyTitleDark: Story = {
    args: {
        title: 'Title lorem ipsun',
    },
    decorators: [
        ThemeDecorator(Theme.DARK),
    ]
}

export const onlyTextDark: Story = {
    args: {
        title: 'Title lorem ipsun',
    },
    decorators: [
        ThemeDecorator(Theme.DARK),
    ]
}