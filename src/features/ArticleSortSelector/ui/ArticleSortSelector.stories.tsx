import type { Meta, StoryObj } from '@storybook/react';
import { ArticleSortSelector } from './ArticleSortSelector';
import { ArticleSortField } from '@/entities/Article';
import { SortOrder } from '@/shared/types/sort';

const meta: Meta<typeof ArticleSortSelector> = {
  title: 'features/ArticleSortSelector',
  component: ArticleSortSelector,
  argTypes: {
    className: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof ArticleSortSelector>;

export const Primary: Story = {
  args: {
    sort: ArticleSortField.CREATED,
    order: 'asc' as SortOrder,
    onChangeOrder: () => {},
    onChangeSort: () => {},
  },
};

export const OrderDesc: Story = {
  args: {
    sort: ArticleSortField.CREATED,
    order: 'desc' as SortOrder,
    onChangeOrder: () => {},
    onChangeSort: () => {},
  },
};

export const SortByTitle: Story = {
  args: {
    sort: ArticleSortField.TITLE,
    order: 'asc' as SortOrder,
    onChangeOrder: () => {},
    onChangeSort: () => {},
  },
};

export const SortByViews: Story = {
  args: {
    sort: ArticleSortField.VIEWS,
    order: 'asc' as SortOrder,
    onChangeOrder: () => {},
    onChangeSort: () => {},
  },
};
