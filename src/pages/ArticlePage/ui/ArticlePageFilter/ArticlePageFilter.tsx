import classNames from "shared/lib/ClassNames/classNames";
import s from './ArticlePageFilter.module.scss'
import { ArticleViewSelector } from "entities/Article/ui/ArticleViewSelector/ArticleViewSelector";
import { useCallback } from "react";
import { articlesPageActions } from "../../model/slices/articlesPageSlice";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { ArticleSortField, ArticleView } from "entities/Article";
import { useSelector } from "react-redux";
import { getArticlesPageOrder, getArticlesPageSearch, getArticlesPageSort, getArticlesPageView } from "../../model/selectors/articlesPageSelectors";
import { useTranslation } from "react-i18next";
import { Card } from "shared/ui/Card/Card";
import { Input } from "shared/ui/Input/Input";
import { ArticleSortSelector } from "features/ArticleSortSelector";
import { SortOrder } from "shared/types/sort";
import { fetchArticlesList } from "pages/ArticlePage/model/services/fetchArticlesList/fetchArticlesList";

export interface ArticlePageFilterProps {
    className?: string
}


export const ArticlePageFilter = (props: ArticlePageFilterProps) => {
    const {
        className
    } = props
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const view = useSelector(getArticlesPageView);
    const sort = useSelector(getArticlesPageSort);
    const order = useSelector(getArticlesPageOrder);
    const search = useSelector(getArticlesPageSearch)

    const fetchData = useCallback(() => {
        dispatch(fetchArticlesList({}))
    }, [])


    const onChangeView = useCallback((view: ArticleView) => {
        dispatch(articlesPageActions.setView(view));
    }, [dispatch]);

    const onChangeSort = useCallback((newSort: ArticleSortField) => {
        dispatch(articlesPageActions.setSort(newSort));
        dispatch(articlesPageActions.setPage(1));
        fetchData()
    }, [dispatch, fetchData]);

    const onChangeOrder = useCallback((newOrder: SortOrder) => {
        dispatch(articlesPageActions.setOrder(newOrder));
        dispatch(articlesPageActions.setPage(1));
        fetchData()
    }, [dispatch, fetchData]);

    const onChangeSearch = useCallback((search: string) => {
        dispatch(articlesPageActions.setSearch(search));
        dispatch(articlesPageActions.setPage(1));
        fetchData()
    }, [dispatch, fetchData]);


    return (
        <div className={classNames(s.ArticlePageFilter, {}, [className])}>
            <div className={s.sortWr}>
                <ArticleSortSelector
                    order={order}
                    sort={sort}
                    onChangeOrder={onChangeOrder}
                    onChangeSort={onChangeSort}
                />
                <ArticleViewSelector
                    view={view}
                    onViewClick={onChangeView}
                />
            </div>
            <Card className={s.search}>
                <Input
                    onChange={onChangeSearch}
                    value={search}
                    placeholder={t('Поиск')}
                />
            </Card>
        </div>
    );
};