import { classNames } from '@/shared/library/ClassNames/classNames'
import s from './styles/Sidebar.new.module.scss'
import { AppLogo } from '@/shared/ui/_redesigned/AppLogo'
import { VStack } from '@/shared/ui/_deprecated/Stack';
import { Button } from '@/shared/ui/_redesigned/Button';
import { ButtonTheme } from '@/shared/ui/_deprecated/Button';
interface RedisignedSidebarProps {
    className?: string;
    collapsed: boolean;
    itemsList: React.ReactNode;
    onToggle: () => void;
}

export const RedisignedSidebar = (props: RedisignedSidebarProps) => {
    const {
        className,
        collapsed,
        itemsList,
        onToggle
    } = props
    return (
        <aside
            data-testid="sidebar"
            className={classNames(
                s.SidebarRedesigned,
                { [s.collapsed]: collapsed },
                [className],
            )}
        >
            <AppLogo size={collapsed ? 30 : 50} className={s.appLogo} />
            <VStack gap="8" className={s.items}>
                {itemsList}
            </VStack>
            <Button
                data-testid="sidebar-toggle"
                onClick={onToggle}
                className={s.collapseBtn}
                variant={"backgroundInverted"}
                size="size_l"
                square
            >
                {collapsed ? '>' : '<'}
            </Button>
        </aside>
    )
}