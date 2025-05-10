import classNames from "@/shared/lib/ClassNames/classNames";
import s from './ArticlePageFilter.module.scss'
import { ArticleViewSelector } from "@/entities/Article";
import { useCallback, useMemo } from "react";
import { articlesPageActions } from "../../model/slices/articlesPageSlice";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { ArticleSortField, ArticleView } from "@/entities/Article";
import { useSelector } from "react-redux";
import { getArticlePageType, getArticlesPageOrder, getArticlesPageSearch, getArticlesPageSort, getArticlesPageView } from "../../model/selectors/articlesPageSelectors";
import { useTranslation } from "react-i18next";
import { Card } from "@/shared/ui/Card";
import { Input } from "@/shared/ui/Input";
import { ArticleSortSelector } from "@/features/ArticleSortSelector";
import { SortOrder } from "@/shared/types/sort";
import { fetchArticlesList } from "@/pages/ArticlePage/model/services/fetchArticlesList/fetchArticlesList";
import { useDebounce } from "@/shared/lib/hooks/useDebounce/useDebounce";
import Tabs, { TabsItem } from "@/shared/ui/Tabs";
import { ArticleType } from "@/entities/Article/model/types/article";
import { ArticleTypeTabs } from "@/features/ArticleTypeTabs";

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
    const type = useSelector(getArticlePageType)

    const fetchData = useCallback(() => {
        dispatch(fetchArticlesList({}))
    }, [dispatch])


    const debounceFetchData = useCallback(
        useDebounce(fetchData, 500),
        [fetchData],
    );


    const onChangeView = useCallback((view: ArticleView) => {
        dispatch(articlesPageActions.setView(view));
    }, [dispatch]);

    const onChangeSort = useCallback((newSort: ArticleSortField) => {
        dispatch(articlesPageActions.setSort(newSort));
        dispatch(articlesPageActions.setPage(1));
        debounceFetchData()
    }, [dispatch, debounceFetchData]);

    const onChangeOrder = useCallback((newOrder: SortOrder) => {
        dispatch(articlesPageActions.setOrder(newOrder));
        dispatch(articlesPageActions.setPage(1));
        fetchData()
    }, [dispatch, debounceFetchData]);

    const onChangeSearch = useCallback((search: string) => {
        dispatch(articlesPageActions.setSearch(search));
        dispatch(articlesPageActions.setPage(1));
        debounceFetchData()
    }, [dispatch, debounceFetchData]);

    const onChangeType = useCallback((value: ArticleType) => {
        dispatch(articlesPageActions.setType(value));
        dispatch(articlesPageActions.setPage(1));
        fetchData()
    }, [dispatch, debounceFetchData]);


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
            <ArticleTypeTabs
                className={s.tabs}
                value={type}
                onChangeType={onChangeType}
            />
        </div>
    );
};