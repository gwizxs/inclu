import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import classNames from '@/shared/library/ClassNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/_deprecated/Button';
import s from './ArticleDetailsPageHeader.module.scss';
import { getArticleDetailsData } from '@/entities/Article/model/selectors/articleDetails';
import { getCanEditArticle } from '../../model/selectors/article';
import { getRouteArticles } from '@/shared/const/router';

interface ArticleDetailsPageHeaderProps {
  className?: string;
}
export const ArticleDetailsPageHeader = memo(
  (props: ArticleDetailsPageHeaderProps) => {
    const { className } = props;
    const { t } = useTranslation('article-details');
    const navigate = useNavigate();
    const article = useSelector(getArticleDetailsData);
    const canEdit = useSelector(getCanEditArticle);

    const onBackToList = useCallback(() => {
      navigate(getRouteArticles());
    }, [navigate]);

    const onEditArticle = useCallback(() => {
      navigate(`${getRouteArticles()}/${article?.id}/edit`);
    }, [navigate, article?.id]);

    return (
      <div className={classNames(s.ArticleDetailsPageHeader, {}, [className])}>
        <Button theme={ButtonTheme.OUTLINE} onClick={onBackToList}>
          {t('Назад')}
        </Button>
        {canEdit && (
          <Button
            className={s.editBtn}
            theme={ButtonTheme.OUTLINE}
            onClick={onEditArticle}
          >
            {t('Редактировать')}
          </Button>
        )}
      </div>
    );
  },
);
