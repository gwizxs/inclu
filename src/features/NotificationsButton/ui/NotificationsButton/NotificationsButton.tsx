import { BrowserView, MobileView } from 'react-device-detect';
import { useState, useCallback } from 'react';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { Icon } from '@/shared/ui/Icon';
import NotificationIcon from '@/shared/assets/icons/notification-20-20.svg';
import { Popover } from '@/shared/ui/Popups';
import { NotificationList } from '@/entities/Notifications';
import classNames from '@/shared/library/ClassNames/classNames';
import { Drawer } from '@/shared/ui/Drawer';
import s from './NotificationsButton.module.scss';

interface NotificationsButtonProps {
  className?: string;
}

export const NotificationsButton = (props: NotificationsButtonProps) => {
  const { className } = props;
  const [isOpen, setIsOpen] = useState(false);

  const onCloseDrawer = useCallback(() => {
    setIsOpen(false);
  }, []);

  const onOpenDrawer = useCallback(() => {
    setIsOpen(true);
  }, []);

  const trigger = (
    <Button onClick={onOpenDrawer} theme={ButtonTheme.CLEAR_INVERTED}>
      <Icon Svg={NotificationIcon} inverted />
    </Button>
  );

  return (
    <div>
      <BrowserView>
        <Popover
          className={classNames(s.NotificationsButton, {}, [className])}
          direction="bottom left"
          trigger={trigger}
        >
          <NotificationList className={s.notifications} />
        </Popover>
      </BrowserView>

      <MobileView>
        {trigger}
        <Drawer isOpen={isOpen} onClose={onCloseDrawer}>
          <NotificationList />
        </Drawer>
      </MobileView>
    </div>
  );
};
