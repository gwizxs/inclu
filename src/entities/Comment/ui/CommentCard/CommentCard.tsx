import { memo } from "react";
import { useTranslation } from "react-i18next";
import { Comment } from '../../model/types/comment'
import cls from './CommentCard.module.scss'
import { Avatar } from "shared/ui/Avatar/Avatar";
import { Text } from "shared/ui/Text/Text";
import { classNames } from "shared/lib/classNames/classNames";
import { Skeleton } from "shared/ui/Skeleton/Skeleton";
import { AppLink } from "shared/ui/AppLink/AppLink";
import { RoutePath } from "shared/config/routeConfig/routeConfig";

interface CommentCardProps {
    className?: string;
    comment: Comment;
    isLoading?: boolean
}

export const CommentCard = (props: CommentCardProps) => {

    const { t } = useTranslation();
    const {
        className,
        comment,
        isLoading
    } = props;

    if (isLoading) {
        return (
            <div className={classNames(cls.CommentCard, {}, [className])}>
                <div className={cls.header}>
                    <Skeleton width={30} height={30} border="50%"/>
                    <Skeleton height={16} width={100} className={cls.text}/>
                </div>
                <Skeleton width={'100%'} height={50}/>
            </div>
        );
    }
    return (
        <div className={classNames(cls.CommentCard, {}, [className])}>
            <AppLink to={`${RoutePath.profile}${comment.user.id}`} className={cls.header}>
                {comment.user.avatar &&
                    <Avatar size={30}
                        src={comment.user.avatar}
                    />
                }
                <Text className={cls.username} title={comment.user.username} />
            </AppLink>
            <Text className={cls.text} text={comment.text} />
        </div>
    );
};

export default memo(CommentCard);