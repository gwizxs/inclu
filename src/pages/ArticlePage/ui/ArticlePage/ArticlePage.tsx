import { memo, useCallback } from 'react';
import { classNames } from '@/shared/library/ClassNames/classNames';
import {
  DynamicModuleLoader,
  ReducersList,
} from '@/shared/library/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/library/hooks/useAppDispatch/useAppDispatch';
import { Page } from '@/widgets/Page/Page';
import cls from './ArticlesPage.module.scss';
import { articlesPageReducer } from '../../model/slices/articlesPageSlice';
import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlePage/fetchNextArticlePage';
import { ArticlePageFilter } from '../ArticlePageFilter/ArticlePageFilter';
import { ArticleInfiniteList } from '../ArticleInfiniteList/ArticleInfiniteList';

interface ArticlesPageProps {
  className?: string;
}

const reducers: ReducersList = {
  articlesPage: articlesPageReducer,
};

const ArticlesPage = (props: ArticlesPageProps) => {
  const { className } = props;
  const dispatch = useAppDispatch();

  const onLoadNextPart = useCallback(() => {
    dispatch(fetchNextArticlesPage());
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
      <Page
        data-testid="ArticlesPage"
        onScrollEnd={onLoadNextPart}
        className={classNames(cls.ArticlesPage, {}, [className])}
      >
        <ArticlePageFilter />
        <ArticleInfiniteList />
      </Page>
    </DynamicModuleLoader>
  );
};

export default memo(ArticlesPage);
