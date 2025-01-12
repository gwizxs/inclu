import { memo } from "react";
import { Article, ArticleView } from "../../model/types/article";
import { useTranslation } from "react-i18next";
import s from './ArticleList.module.scss'
import { classNames } from "shared/lib/ClassNames/classNames";
import { ArticleListItem } from "../ArticleListItem/ArticleListItem";


interface ArticleListProps {
    className?: string;
    articles: Article[];
    isLoading?: boolean;
    view?: ArticleView;
}

export const ArticleList = memo((props: ArticleListProps) => {
    const {
        className,
        articles,
        view = ArticleView.SMALL,
        isLoading
    } = props;
    const { t } = useTranslation();

    const renderArticle = (article: Article) => {
        return (
            <ArticleListItem
                article={article}
                view={view}
                className={s.card}
            />
        )
    }

    return (
        <div className={classNames(s.ArticleList, {}, [className])}>
            {articles.length > 0 ? (
                articles.map(renderArticle)
            ) : t('Статьи не найдены')}
        </div>
    )
})