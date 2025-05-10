import { EntityState } from '@reduxjs/toolkit';
import { Article } from '@/entities/Article';
import { ArticleSortField, ArticleType, ArticleView } from '@/entities/Article/model/consts/consts';
import { SortOrder } from '@/shared/types/sort';

export interface ArticlesPageSchema extends EntityState<Article> {
    isLoading?: boolean;
    error?: string;

    page: number;
    limit?: number;
    hasMore: boolean;
    // filters
    view: ArticleView;
    order: SortOrder;
    sort: ArticleSortField;
    search: string;
    type: ArticleType;

    _inited: boolean;
}
