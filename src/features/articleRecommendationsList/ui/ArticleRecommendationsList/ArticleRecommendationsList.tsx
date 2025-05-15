import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/library/ClassNames/classNames';
import { TextSize, Text } from '@/shared/ui/Text';
import { ArticleList } from '@/entities/Article';
import { VStack } from '@/shared/ui/Stack';
import { useArticleRecommendationsListQuery } from '../../api/articleRecommendationsApi';

interface ArticleRecommendationsListProps {
    className?: string;
}

export const ArticleRecommendationsList = memo((props: ArticleRecommendationsListProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const { data: article, isLoading, error } = useArticleRecommendationsListQuery(3);

    if (isLoading || error || !article || article.length === 0) {
        return null;
    }
    return (
        <VStack data-testid="ArticleRecommendationsList" className={classNames('', {}, [className])}>
            <Text
                size={TextSize.L}
                title={t('Рекомендуем')}
            />
            <ArticleList
                articles={article}
                isLoading={isLoading}
                target="_blank"
                virtualized={false}
            />
        </VStack>
    );
});
