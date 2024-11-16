import type { Meta, StoryObj } from '@storybook/react';
import AppLink, { AppLinkTheme } from './AppLink';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta: Meta<typeof AppLink> = {
    title: 'shared/AppLink',
    component: AppLink,

    args: {
        to: '/'
    }
}

export default meta;
type Story = StoryObj<typeof AppLink>;

// ==== LIGHT VERSION ===

export const Primary: Story = {
    args: {
        children: 'Text',
        theme: AppLinkTheme.PRIMARY
    }
};

export const Secondary: Story = {
    args: {
        children: 'Text',
        theme: AppLinkTheme.SECONDARY
    }
};


// ==== DARK VERSION ====

export const PrimaryDark: Story = {
    args: {
        children: 'Text',
        theme: AppLinkTheme.PRIMARY
    }
};

export const SecondaryDark: Story = {
    args: {
        children: 'Text',
        theme: AppLinkTheme.SECONDARY
    }
};

PrimaryDark.decorators = [
    (Story) => ThemeDecorator(Theme.DARK)(Story),
]

SecondaryDark.decorators = [
    (Story) => ThemeDecorator(Theme.DARK)(Story),
]
