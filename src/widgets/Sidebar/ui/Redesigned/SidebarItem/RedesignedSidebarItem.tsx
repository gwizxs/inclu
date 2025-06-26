import { AppLink } from "@/shared/ui/_redesigned/AppLink"
import s from './styles/SidebarItem.new.module.scss'
import classNames from "@/shared/library/ClassNames/classNames"
import { useTranslation } from "react-i18next"
import { SidebarItemType } from "@/widgets/Sidebar/model/types/sidebar"
import { Icon } from "@/shared/ui/_redesigned/Icon/Icon"

interface RedesignedSidebarItemProps {
    item: SidebarItemType;
    collapsed: boolean;
}

export const RedesignedSidebarItem = ({item, collapsed}: RedesignedSidebarItemProps) => {
    const { t } = useTranslation()
    return (
        <AppLink
        variant="primary"
        to={item.path}
        className={classNames(s.item, { [s.collapsed]: collapsed })}
      >
        <Icon Svg={item.Icon} />
        <span className={s.link}>{t(item.text)}</span>
      </AppLink>
    )
}