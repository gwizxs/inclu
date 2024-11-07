import { Link } from "react-router-dom";
import { classNames } from "shared/lib/classNames";
import s from './Navbar.module.scss'
import AppLink, { AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";



interface INavbarProps {
    className?: string
}

export const Navbar = ({ className }: INavbarProps) => {

    return (
        <div className={classNames(s.Navbar, {}, [className])}>
                        <ThemeSwitcher/>
            <div className={s.links}>
            <AppLink theme={AppLinkTheme.SECONDARY} className={s.mainLink} to={'/'}>Главная</AppLink>
            <AppLink theme={AppLinkTheme.PRIMARY} to={'/about'}>О сайте</AppLink>
            </div>
        </div>
    )
}

export default Navbar;

