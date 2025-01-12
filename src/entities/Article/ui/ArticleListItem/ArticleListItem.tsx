import { memo } from "react";
import { Article, ArticleView } from "../../model/types/article";
import { useTranslation } from "react-i18next";
import s from './ArticleListItem.module.scss'
import { classNames } from "shared/lib/ClassNames/classNames";
import { Text } from "shared/ui/Text/Text";
import { Icon } from "shared/ui/Icon/Icon";
import EyeIcon from 'shared/assets/icons/eye-20-20.svg'
import { Card } from "shared/ui/Card/Card";


interface ArticleListItemProps {
    className?: string;
    article: Article;
    view: ArticleView;
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
    const {
        className,
        article,
        view,
    } = props;
    const { t } = useTranslation();

    if (view === ArticleView.BIG) {
        return (
            <div className={classNames(s.ArticleListItem, {}, [className, s.big])}>
                <img src={article.img} alt={article.title} className={s.img} />
                <div className={s.info}>
                    <h4>{article.title}</h4>
                    <p>{article.subtitle}</p>
                </div>
            </div>
        )
    }

    return (
        <div className={classNames(s.SMALL, {}, [className, view])}>
            <Card className={s.card}>
                <div className={s.imageWrapper}>
                    <img src={article.img} alt={article.title} className={s.img} />
                    <Text text={article.createdAt} className={s.date} />
                </div>
                <div className={s.infoWrapper}>
                    <Text text={article.type.join(', ')} className={s.types} />
                    <Text text={String(article.views)} className={s.views} />
                    <Icon Svg={EyeIcon} />
                </div>
                <Text text={article.title} className={s.title} />
            </Card>
        </div>
    )
})