/* eslint-disable react/jsx-key */
import { CommentCard } from "entities/Comment";
import { memo } from "react";
import { useTranslation } from "react-i18next";
import { Text } from "shared/ui/Text/Text";
import {Comment} from '../../../model/types/comment';
import cls from './CommentList.module.scss'

interface CommentListProps {
    className?: string;
    comments?: Comment[];
    isLoading?: boolean
}

export const CommentList = (props: CommentListProps) => {
    const { t } = useTranslation();
    const {
        className,
        comments,
        isLoading
    } = props;
    return (
        <div>
            {comments?.length 
                ? comments.map((comment) => (
                    <CommentCard isLoading={isLoading} className={cls.comment} comment={comment} />
                ))
                : <Text text={t('Комментарии отсутствуют')} />
            }
        </div>
    );
};

export default memo(CommentList);