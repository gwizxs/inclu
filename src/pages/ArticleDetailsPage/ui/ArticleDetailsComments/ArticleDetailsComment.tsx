import { classNames } from '@/shared/library/ClassNames/classNames';
import { CommentList } from '@/entities/Comment';
import { AddCommentForm } from '@/features/addCommentForm';
import { useTranslation } from 'react-i18next';
import { Text, TextSize } from '@/shared/ui/Text';
import { useSelector } from 'react-redux';
import { Suspense, useCallback } from 'react';
import { useAppDispatch } from '@/shared/library/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from '@/shared/library/hooks/useInitialEffect/useInitialEffect';
import { Loader } from '@/shared/ui/Loader';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { getArticleComments } from '../../model/slices/articleDetailsCommentsSlice';
import { getArticleCommentsIsLoading } from '../../model/selectors/comments';
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle';
import cls from '../ArticleDetailsPage/ArticleDetailsPage.module.scss';

interface ArticleDetailsCommentProps {
  id: string;
}

export const ArticleDetailsComment = (props: ArticleDetailsCommentProps) => {
  const { id } = props;
  const { t } = useTranslation();
  const comments = useSelector(getArticleComments.selectAll);
  const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
  const dispatch = useAppDispatch();

  const onSendComment = useCallback(
    (text: string) => {
      dispatch(addCommentForArticle(text));
    },
    [dispatch],
  );

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id));
  });

  return (
    <div className={classNames(cls.ArticleDetailsComment)}>
      <Text
        size={TextSize.L}
        className={cls.commentTitle}
        title={t('Комментарии')}
      />
      <Suspense fallback={<Loader />}>
        <AddCommentForm onSendComment={onSendComment} />
      </Suspense>
      <CommentList isLoading={commentsIsLoading} comments={comments} />
    </div>
  );
};
