import type { Meta, StoryObj } from '@storybook/react';
import { ArticleTextBlockComponent } from './ArticleTextBlockComponent';
import { ArticleBlockType } from '../../model/consts/consts';

const meta: Meta<typeof ArticleTextBlockComponent> = {
    title: 'entities/Article/ArticleTextBlockComponent',
    component: ArticleTextBlockComponent,
    argTypes: {
        className: { control: 'text' },
    },
};

export default meta;
type Story = StoryObj<typeof ArticleTextBlockComponent>;

export const Primary: Story = {
    args: {
        block: {
            id: '1',
            type: ArticleBlockType.TEXT,
            title: 'Title',
            paragraphs: ['Paragraph 1', 'Paragraph 2'],
        },
    },
};
