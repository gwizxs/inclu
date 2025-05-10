import type { Meta, StoryObj } from '@storybook/react';
import { ArticleTypeTabs } from './ArticleTypeTabs';
import { ArticleType } from '@/entities/Article';

const meta: Meta<typeof ArticleTypeTabs> = {
    title: 'features/ArticleTypeTabs',
    component: ArticleTypeTabs,
    argTypes: {
        className: { control: 'text' },
    },
};

export default meta;
type Story = StoryObj<typeof ArticleTypeTabs>;

export const Primary: Story = {
    args: {
        value: ArticleType.ALL,
        onChangeType: () => {},
    },
};

export const IT: Story = {
    args: {
        value: ArticleType.IT,
        onChangeType: () => {},
    },
};

export const SCIENCE: Story = {
    args: {
        value: ArticleType.SCIENCE,
        onChangeType: () => {},
    },
};

export const ECONOMICS: Story = {
    args: {
        value: ArticleType.ECONOMICS,
        onChangeType: () => {},
    },
};
