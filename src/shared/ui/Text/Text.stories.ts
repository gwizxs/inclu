

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
        title: 'TITLE afafafaffafafafafafafafafafa',
        text: 'TEXT affafaffaafafafafaffaafafaffa'
    },
};

export const PrimaryDark: Story = {
    args: {
        title: 'TITLE afafafaffafafafafafafafafafa',
        text: 'TEXT affafaffaafafafafaffaafafaffa'
    },
};

PrimaryDark.decorators = [
    (Story) => ThemeDecorator(Theme.DARK)(Story),
]

export const Error: Story = {
    args: {
        text: 'TEXT afafafaffafafafafafafafafafa',
        title: 'TITLE afafafaffafafafafafafafafafa',
        theme: TextTheme.ERROR
    },
};

Error.decorators = [
    (Story) => ThemeDecorator(Theme.DARK)(Story),
]

export const ErrorTitle: Story = {
    args: {
        title: 'TITLE afafafaffafafafafafafafafafa',
        theme: TextTheme.ERROR
    },
};

export const ErrorText: Story = {
    args: {
        text: 'TEXT afafafaffafafafafafafafafafa',
        theme: TextTheme.ERROR
    },
};

export const onlyTitle: Story = {
    args: {
        title: 'TITLE afafafaffafafafafafafafafafa',
    },
};

export const onlyText: Story = {
    args: {
        text: 'TEXT afafafaffafafafafafafafafafa',
    },
};

export const onlyTitleDark: Story = {
    args: {
        title: 'TITLE afafafaffafafafafafafafafafa',
    },
};

onlyTitleDark.decorators = [
    (Story) => ThemeDecorator(Theme.DARK)(Story),
]

export const onlyTextDark: Story = {
    args: {
        text: 'TEXT afafafaffafafafafafafafafafa',
    },
};

onlyTextDark.decorators = [
    (Story) => ThemeDecorator(Theme.DARK)(Story),
]

