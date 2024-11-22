import AppLink, { AppLinkTheme } from "shared/ui/AppLink/AppLink";
import s from './SidebarItem.module.scss'
import { useTranslation } from "react-i18next";
import { SidebarItemCom } from "../../model/items";
import { memo } from "react";
import { classNames } from "shared/lib/ClassNames/classNames";

interface SidebarItemProps {
    item: SidebarItemCom;
    collapsed: boolean;
}

export const SidebarItem = memo(({ item, collapsed }: SidebarItemProps) => {
    const { t } = useTranslation();

    return (
        <AppLink
            theme={AppLinkTheme.SECONDARY}
            to={item.path}
            className={classNames(s.item, { [s.collapsed]: collapsed })}
        >
            <item.icon className={s.icon} />
            <span className={s.link}>
                {t(item.text)}
            </span>
        </AppLink>
    );
});


export default SidebarItem;