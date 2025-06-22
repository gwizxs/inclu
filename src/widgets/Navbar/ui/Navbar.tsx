import { useTranslation } from 'react-i18next';
import  { memo, useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { Button, ButtonTheme } from '@/shared/ui/_deprecated/Button';
import { LoginModal } from '@/features/AuthByUsername';
import { getUserAuthData } from '@/entities/User';
import cls from './Redesigned/styles/Navbar.module.scss';
import { ToggleFeatures } from '@/shared/library/features';
import classNames from '@/shared/library/ClassNames/classNames';
import { RedesignedNavbar } from './Redesigned/RedesignedNavbar';
import { DeprecatedNavbar } from './Redesigned/DeprecatedNavbar';
interface NavbarProps {
    className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);
    const authData = useSelector(getUserAuthData);

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    if (authData) {
        return (
            <ToggleFeatures
                feature="isAppRedesigned"
                on={
                  <RedesignedNavbar
                    className={className}
                  />
                }
                off={
                  <DeprecatedNavbar
                    className={className}
                  />
                }
            />
        );
    }

    return (
        <header className={classNames(cls.Navbar, {}, [className])}>
            <Button
                theme={ButtonTheme.CLEAR_INVERTED}
                className={cls.links}
                onClick={onShowModal}
            >
                {t('Войти')}
            </Button>
            {isAuthModal && (
                <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
            )}
        </header>
    );
});
