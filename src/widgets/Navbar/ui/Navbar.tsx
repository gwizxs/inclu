import { classNames } from "shared/lib/ClassNames/classNames";
import s from './Navbar.module.scss'
import AppLink, { AppLinkTheme } from "shared/ui/AppLink/AppLink";



interface INavbarProps {
    className?: string
}

export const Navbar = ({ className }: INavbarProps) => {

    return (
        <div className={classNames(s.Navbar, {}, [className])}>
            <div className={s.links}>
                <AppLink theme={AppLinkTheme.SECONDARY} className={s.mainLink} to={'/'}>Главная</AppLink>
                <AppLink theme={AppLinkTheme.PRIMARY} to={'/about'}>О сайте</AppLink>
            </div>
        </div>
    )
}

export default Navbar;

