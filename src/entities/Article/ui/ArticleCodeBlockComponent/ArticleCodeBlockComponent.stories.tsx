import type { Meta, StoryObj } from '@storybook/react';
import { ArticleCodeBlockComponent } from './ArticleCodeBlockComponent';
import { ArticleBlockType } from '../../model/consts/consts';

const meta: Meta<typeof ArticleCodeBlockComponent> = {
  title: 'entities/Article/ArticleCodeBlockComponent',
  component: ArticleCodeBlockComponent,
  argTypes: {
    className: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof ArticleCodeBlockComponent>;

export const Primary: Story = {
  args: {
    block: {
      id: '1',
      type: ArticleBlockType.CODE,
      code: 'console.log("Hello, world!");',
    },
  },
};
