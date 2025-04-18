import classNames from 'shared/lib/ClassNames/classNames';
import { useTranslation } from 'react-i18next';
import { useNotificationsQuery } from '../../api/NotificationApi';
import s from './NotificationList.module.scss';
import { NotificationItem } from '../NotificationItem/NotificationItem';

interface NotificationListProps {
    className?: string;
}

export const NotificationList = (props: NotificationListProps) => {
    const { className } = props;
    const { data, isLoading } = useNotificationsQuery(null);
    const { t } = useTranslation();

    return (
        <div className={classNames(s.NotificationList, {}, [className])}>
            {data?.map((notification) => (
                <NotificationItem key={notification.id} notification={notification} />
            ))}
        </div>
    );
};
