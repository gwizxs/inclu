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
                /
            </div>
        </div>
    )
}

export default Navbar;

