import { memo } from 'react';
import { Avatar } from '@/shared/ui/_deprecated/Avatar';
import { Text } from '@/shared/ui/_deprecated/Text';
import { Skeleton } from '@/shared/ui/_deprecated/Skeleton';
import { AppLink } from '@/shared/ui/_deprecated/AppLink';
import cls from './CommentCard.module.scss';
import { Comment } from '../../model/types/comment';
import classNames from '@/shared/library/ClassNames/classNames';
import { getRouteProfile } from '@/shared/const/router';

interface CommentCardProps {
  className?: string;
  comment?: Comment;
  isLoading?: boolean;
}

export const CommentCard = memo((props: CommentCardProps) => {
  const { className, comment, isLoading } = props;

  if (isLoading) {
    return (
      <div
        data-testid="CommentCard.Loading"
        className={classNames(cls.CommentCard, {}, [className, cls.loading])}
      >
        <div className={cls.header}>
          <Skeleton width={30} height={30} border="50%" />
          <Skeleton height={16} width={100} className={cls.username} />
        </div>
        <Skeleton className={cls.text} width="100%" height={50} />
      </div>
    );
  }

  if (!comment) {
    return null;
  }

  return (
    <div
      data-testid="CommentCard.Content"
      className={classNames(cls.CommentCard, {}, [className])}
    >
      <AppLink to={getRouteProfile(comment.user.id)} className={cls.header}>
        {comment.user.avatar ? (
          <Avatar size={30} src={comment.user.avatar} />
        ) : null}
        <Text className={cls.username} title={comment.user.username} />
      </AppLink>
      <Text className={cls.text} text={comment.text} />
    </div>
  );
});
