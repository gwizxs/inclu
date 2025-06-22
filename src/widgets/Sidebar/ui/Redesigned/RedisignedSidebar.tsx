import { classNames } from '@/shared/library/ClassNames/classNames'
import s from './styles/Sidebar.new.module.scss'
import { AppLogo } from '@/shared/ui/_deprecated/AppLogo'   
interface RedisignedSidebarProps {
    className?: string;
    collapsed: boolean;
}

export const RedisignedSidebar = ({className, collapsed}: RedisignedSidebarProps       ) => {
    return (
        <aside
        data-testid="sidebar"
        className={classNames(
            s.SidebarRedesigned,
            { [s.collapsed]: collapsed },
            [className],
        )}
    >
        <AppLogo className={s.appLogo} />
    </aside>
    )
}