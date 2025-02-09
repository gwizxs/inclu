import classNames from "shared/lib/ClassNames/classNames";
import s from './ArticlePageFilter.module.scss'
import { ArticleViewSelector } from "entities/Article/ui/ArticleViewSelector/ArticleViewSelector";
import { useCallback } from "react";
import { articlesPageActions } from "pages/ArticlePage/model/slices/articlesPageSlice";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { ArticleView } from "entities/Article";
import { useSelector } from "react-redux";
import { getArticlesPageView } from "pages/ArticlePage/model/selectors/articlesPageSelectors";
import { Select } from "shared/ui/Select/Select";
import { useTranslation } from "react-i18next";
import { Card } from "shared/ui/Card/Card";
import { Input } from "shared/ui/Input/Input";

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
    const onChangeView = useCallback((view: ArticleView) => {
        dispatch(articlesPageActions.setView(view));
    }, [dispatch]);

    return (
        <div className={classNames(s.ArticlePageFilter, {}, [className])}>
            <div className={s.sortWr}>
                <Select label={t('Сортировать ПО')} />
                <ArticleViewSelector view={view} onViewClick={onChangeView} />
            </div>
            <Card className={s.search}>
                <Input placeholder={t('Поиск')}/>
            </Card>
        </div>
    );
};