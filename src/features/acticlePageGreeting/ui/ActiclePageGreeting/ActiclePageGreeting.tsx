import { classNames } from '@/shared/library/ClassNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './ActiclePageGreeting.module.scss';
import { memo, useEffect, useState } from 'react';
import { Modal } from '@/shared/ui/_deprecated/Modal';
import { Text } from '@/shared/ui/_deprecated/Text';
import { useJsonSettings } from '@/entities/User';
import { saveJsonSettings } from '@/entities/User/model/services/saveJsonSettings';
import { useAppDispatch } from '@/shared/library/hooks/useAppDispatch/useAppDispatch';
import { isMobile } from 'react-device-detect';
import { Drawer } from '@/shared/ui/_deprecated/Drawer';

interface ActiclePageGreetingProps {
    className?: string;
}

export const ActiclePageGreeting = memo((props: ActiclePageGreetingProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const { isArticlesPageWasOpened } = useJsonSettings();
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (!isArticlesPageWasOpened) {
            setIsOpen(true);
            dispatch(saveJsonSettings({isArticlesPageWasOpened: true}))
        }
    }, [isArticlesPageWasOpened, dispatch]);

    const onClose = () => {
        setIsOpen(false);
    }

    const text = (
<Text title={t('Welcome to the article page')} text={t('This is the article page. You can read the article here')} />
    )

    if (isMobile) {
        return (
            <Drawer lazy isOpen={isOpen} onClose={onClose} className={classNames(cls.ActiclePageGreeting, {}, [className])}>
                {text}
            </Drawer>
        )
    }
    
    return (
        <Modal lazy isOpen={isOpen} onClose={onClose} className={classNames(cls.ActiclePageGreeting, {}, [className])}>
            {text}
        </Modal>
    );
});