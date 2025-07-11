import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { ArticlesDetails } from '@/entities/Article';
import { classNames } from '@/shared/library/ClassNames/classNames';
import {
  DynamicModuleLoader,
  ReducersList,
} from '@/shared/library/components/DynamicModuleLoader/DynamicModuleLoader';
import { Page } from '@/widgets/Page/Page';
import { ArticleRecommendationsList } from '@/features/articleRecommendationsList';
import cls from './ArticleDetailsPage.module.scss';
import { articleDetailsPageReducer } from '../../model/slices';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import { ArticleDetailsComment } from '../ArticleDetailsComments/ArticleDetailsComment';
import { ArticleRating } from '@/features/articleRating';
import { ToggleFeatures } from '@/shared/library/features';
import { Card } from '@/shared/ui/_deprecated/Card';
import { Text } from '@/shared/ui/_deprecated/Text';

interface ArticleDetailsPageProps {
  className?: string;
}

const reducers: ReducersList = {
  articleDetailsPage: articleDetailsPageReducer,
};

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
  const { className } = props;
  const { t } = useTranslation('article-details');
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return (
      <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
        {t('Статья не найдена')}
      </div>
    );
  }

  return (
    <DynamicModuleLoader reducers={reducers}>
      <Page
        data-testid="ArticleDetails.Info"
        className={classNames(cls.ArticleDetailsPage, {}, [className])}
      >
        <ArticleDetailsPageHeader />
        <ArticlesDetails id={id} />
        <ArticleRating articleId={id} />
        <ArticleRecommendationsList />
        <ArticleDetailsComment id={id} />
      </Page>
    </DynamicModuleLoader>
  );
};

export default memo(ArticleDetailsPage);
