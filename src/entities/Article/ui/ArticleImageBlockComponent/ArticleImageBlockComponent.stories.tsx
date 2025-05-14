import type { Meta, StoryObj } from '@storybook/react';
import { ArticleImageBlockComponent } from './ArticleImageBlockComponent';
import { ArticleBlockType } from '../../model/consts/consts';

const meta: Meta<typeof ArticleImageBlockComponent> = {
    title: 'entities/Article/ArticleImageBlockComponent',
    component: ArticleImageBlockComponent,
    argTypes: {
        className: { control: 'text' },
    },
};

export default meta;
type Story = StoryObj<typeof ArticleImageBlockComponent>;

export const Primary: Story = {
    args: {
        block: {
            id: '1',
            type: ArticleBlockType.IMAGE,
            src: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
            title: 'Image',
        },
    },
};
