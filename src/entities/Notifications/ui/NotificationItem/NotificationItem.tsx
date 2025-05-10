import { memo } from 'react';
import { classNames } from '@/shared/lib/ClassNames/classNames';
import { Card, CardTheme } from '@/shared/ui/Card';
import { Text } from '@/shared/ui/Text';
import cls from './NotificationItem.module.scss';
import { Notification } from '../../model/notification';

interface NotificationItemProps {
    className?: string;
    item: Notification;
}

export const NotificationItem = memo((props: NotificationItemProps) => {
    const { className, item } = props;
    const content = (
        <Card
            theme={CardTheme.OUTLINED}
            className={classNames(cls.NotificationItem, {}, [className])}
        >
            <Text title={item?.title} text={item?.description} />
        </Card>
    );

    if (item.href) {
        return (
            <a className={cls.link} target="_blank" href={item?.href} rel="noreferrer">
                {content}
            </a>
        );
    }

    return content;
});
