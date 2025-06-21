import { classNames } from "@/shared/library/ClassNames/classNames"
import { AvatarDropdown } from "@/features/AvatarDropdown"
import { NotificationsButton } from "@/features/NotificationsButton"
import { HStack } from "@/shared/ui/Stack"
import cls from './styles/Navbar.new.module.scss'

interface RedesignedNavbarProps {
    className?: string;
}

export const RedesignedNavbar = (props: RedesignedNavbarProps) => {
    const {
        className
    } = props
    return (
        <header
        className={classNames(cls.NavbarRedesigned, {}, [
            className,
        ])}
    >
        <HStack gap="16" className={cls.actions}>
            <NotificationsButton />
            <AvatarDropdown />
        </HStack>
    </header>       
    )
}