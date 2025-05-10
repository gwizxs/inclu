import type { Meta, StoryObj, ArgTypes } from '@storybook/react';
import { ArticleViewSelector } from './ArticleViewSelector';
import { ArticleBlockType, ArticleView } from '../../model/consts/consts';

const meta: Meta<typeof ArticleViewSelector> = {
    title: 'entities/Article/ArticleViewSelector',
    component: ArticleViewSelector,
    argTypes: {
        className: { control: 'text' },
    },
};

export default meta;
type Story = StoryObj<typeof ArticleViewSelector>;

export const Primary: Story = {
    args: {
        view: ArticleView.BIG,
    },
};
