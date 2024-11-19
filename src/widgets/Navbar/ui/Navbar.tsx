import { classNames } from 'shared/lib/ClassNames/classNames';
import { useTranslation } from 'react-i18next';
import  { useCallback, useState } from 'react';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import cls from './Navbar.module.scss';
import { LoginModal } from 'features/AuthByUsername';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button
                theme={ThemeButton.BACKGROUND_INVERTED}
                className={cls.links}
                onClick={onShowModal}
            >
                {t('Войти')}
            </Button>
            <LoginModal
                isOpen={isAuthModal}
                onClose={onCloseModal}
            />
        </div>
    );
};

export default Navbar;