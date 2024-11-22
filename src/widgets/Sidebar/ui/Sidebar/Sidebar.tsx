import { classNames } from 'shared/lib/ClassNames/classNames';
import cls from './Sidebar.module.scss';
import  {memo, useMemo, useState} from "react";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";
import LangSwitcher from 'widgets/LangSwitcher/ui/LangSwitcher';
import Button, { ButtonSize, ThemeButton } from 'shared/ui/Button/Button';
import { sidebarItemsList } from '../../model/items';
import SidebarItem from '../SidebarItem/SidebarItem';
interface SidebarProps {
    className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    const itemsList = useMemo(() => sidebarItemsList.map((item) => (
        <SidebarItem
            item={item}
            collapsed={collapsed}
            key={item.path}
        />
    )), [collapsed]);

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
                {itemsList}
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
});
