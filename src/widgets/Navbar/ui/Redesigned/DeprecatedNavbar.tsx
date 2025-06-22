import { classNames } from "@/shared/library/ClassNames/classNames"
import { AvatarDropdown } from "@/features/AvatarDropdown"
import { AppLinkTheme } from "@/shared/ui/_deprecated/AppLink"
import { NotificationsButton } from "@/features/NotificationsButton"
import { AppLink } from "@/shared/ui/_deprecated/AppLink"
import { HStack } from "@/shared/ui/_deprecated/Stack"
import { getRouteArticleCreate } from "@/shared/const/router"
import { Text, TextTheme } from "@/shared/ui/_deprecated/Text"
import cls from './styles/Navbar.module.scss'
import { useTranslation } from "react-i18next"

interface DeprecatedNavbarProps {
    className?: string;
}

export const DeprecatedNavbar = (props: DeprecatedNavbarProps) => {
    const {
        className
    } = props
    const { t } = useTranslation()
    return (
        <header className={classNames(cls.Navbar, {}, [className])}>
        <Text
            className={cls.appName}
            title={t('Inclu')}
            theme={TextTheme.INVERTED}
        />
        <AppLink
            to={getRouteArticleCreate()}
            theme={AppLinkTheme.SECONDARY}
            className={cls.createBtn}
        >
            {t('Создать статью')}
        </AppLink>
        <HStack gap="16" className={cls.actions}>
            <NotificationsButton />
            <AvatarDropdown />
        </HStack>
    </header>
    )
}