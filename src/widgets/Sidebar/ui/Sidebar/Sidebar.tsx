import { classNames } from 'shared/lib/ClassNames/classNames';
import cls from './Sidebar.module.scss';
import  {useState} from "react";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";
import LangSwitcher from 'widgets/LangSwitcher/ui/LangSwitcher';
import Button, { ButtonSize, ThemeButton } from 'shared/ui/Button/Button';
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routerConfig/routerConfig';
import AboutIcon20 from 'shared/assets/icons/about-20-20.svg'
import MainIcon20 from 'shared/assets/icons/main-20-20.svg'
import { useTranslation } from 'react-i18next';
interface SidebarProps {
    className?: string;
}

export const Sidebar = ({className}: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false)
    const { t } = useTranslation();

    const onToggle = () => {
        setCollapsed(prev => !prev);
    }

    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
        >
            <Button
                data-testid="sidebar-toggle"
                onClick={onToggle}
                className={cls.collapseBtn}
                theme={ThemeButton.BACKGROUND_INVERTED}
                size={ButtonSize.L}
                square
            >
                {collapsed ? '>' : '<'}
            </Button>
            <div className={cls.items}>
                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    to={RoutePath.main}
                    className={cls.item}
                >
                    <MainIcon20 className={cls.icon} />
                    <span className={cls.link}>
                        {t('Главная')}
                    </span>
                </AppLink>
                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    to={RoutePath.about}
                    className={cls.item}
                >
                    <AboutIcon20 className={cls.icon} />
                    <span className={cls.link}>
                        {t('О сайте')}
                    </span>
                </AppLink>
            </div>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher
                    short={collapsed}
                    className={cls.lang}
                />
            </div>
        </div>
    );
};

