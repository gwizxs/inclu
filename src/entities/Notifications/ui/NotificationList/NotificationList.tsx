import classNames from '@/shared/lib/ClassNames/classNames';
import { VStack } from '@/shared/ui/Stack';
import { Skeleton } from '@/shared/ui/Skeleton';
import { useNotificationsQuery } from '../../api/NotificationApi';
import s from './NotificationList.module.scss';
import { NotificationItem } from '../NotificationItem/NotificationItem';

interface NotificationListProps {
    className?: string;
}

export const NotificationList = (props: NotificationListProps) => {
    const { className } = props;
    const { data, isLoading } = useNotificationsQuery(null, {
        pollingInterval: 5000,
    });

    if (isLoading) {
        return (
            <VStack gap="16" max className={classNames(s.NotificationList, {}, [className])}>
                {Array.from({ length: 5 }).map((_, index) => (
                    <Skeleton key={index} className={s.NotificationList} width="100%" height={150} border="8px" />
                ))}
            </VStack>
        );
    }

    return (
        <VStack gap="16" max className={classNames(s.NotificationList, {}, [className])}>
            {data?.map((notification) => (
                <NotificationItem key={notification.id} item={notification} />
            ))}
        </VStack>
    );
};
