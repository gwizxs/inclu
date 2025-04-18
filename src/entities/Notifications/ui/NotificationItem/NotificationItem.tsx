import classNames from 'shared/lib/ClassNames/classNames';
import { Notification } from '../../model/notification';
import s from './NotificationItem.module.scss';

interface NotificationItemProps {
    className?: string;
    notification: Notification;
}

export const NotificationItem = (props: NotificationItemProps) => {
    const { className, notification } = props;

    return <div className={classNames(s.NotificationItem, {}, [className])}>NotificationItem</div>;
};
