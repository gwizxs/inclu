import { AppLink, AppLinkTheme } from "@/shared/ui/_deprecated/AppLink"
import { AppLink as AppLinkDeprecated } from "@/shared/ui/_deprecated/AppLink"
import s from './styles/SidebaItem.module.scss'
import classNames from "@/shared/library/ClassNames/classNames"
import { useTranslation } from "react-i18next"
import { SidebarItemType } from "@/widgets/Sidebar/model/types/sidebar"

interface DeprecatedSidebarItemProps {
    item: SidebarItemType;
    collapsed: boolean;
}

export const DeprecatedSidebarItem = ({item, collapsed}: DeprecatedSidebarItemProps) => {
    const { t } = useTranslation()
    return (
        <AppLinkDeprecated
        theme={AppLinkTheme.SECONDARY}
        to={item.path}
        className={classNames(s.item, { [s.collapsed]: collapsed })}
      >
        <item.Icon className={s.icon} />
        <span className={s.link}>{t(item.text)}</span>
      </AppLinkDeprecated>
    )
}