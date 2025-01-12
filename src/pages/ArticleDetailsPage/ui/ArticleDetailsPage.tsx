import { classNames } from 'shared/lib/ClassNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { ArticlesDetails } from 'entities/Article';  
import { useParams } from 'react-router-dom';
import cls from './ArticleDetailsPage.module.scss';
import { Text } from 'shared/ui/Text/Text';
import { CommentList } from 'entities/Comment';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articleDetailsCommentsReducer, getArticleComments } from 'pages/ArticlePage/model/slice/ArticleDetailsCommentsSlice';
import { useSelector } from 'react-redux';
import { getArticleCommentsIsLoading } from 'pages/ArticlePage/model/selectors/comments';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchCommentsByArticleId } from 'pages/ArticlePage/model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';

interface ArticleDetailsPageProps {
    className?: string;
}

const reducers: ReducersList = {
    articleDetailsComments: articleDetailsCommentsReducer
};

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
    const { className } = props;
    const { t } = useTranslation('article-details');
    const { id } = useParams<{ id: string }>();
    const comments = useSelector(getArticleComments.selectAll);
    const commentsIsLoading = useSelector(getArticleCommentsIsLoading)
    const dispatch = useAppDispatch();

    useInitialEffect(() => {
        if(id === undefined) {
            return '';
        }
        dispatch(fetchCommentsByArticleId(id));
    });

    if (!id) {
        return (
            <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
                {t('Статья не найдена')}
            </div>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers}>
            <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
                <ArticlesDetails id={id} />
                <Text className={cls.commentTitle} title={t('Комментарии')} />
                <CommentList
                    isLoading={commentsIsLoading}
                    comments={comments} />
            </div>
        </DynamicModuleLoader>
    );
};

export default memo(ArticleDetailsPage);