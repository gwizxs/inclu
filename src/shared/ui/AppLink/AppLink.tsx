
import { classNames } from "shared/lib/ClassNames/classNames";
import s from './AppLink.module.scss'
import { Link, LinkProps } from "react-router-dom";
import { FC } from "react";

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary'
}

interface IAppLinkProps extends LinkProps {
    className?: string,
    theme: AppLinkTheme,
}

export const AppLink: FC<IAppLinkProps> = ( props ) => {
    const {
        className,
        children,
        theme = AppLinkTheme.PRIMARY,
        ...otherProps
    } = props


    return (
        <Link
            className={classNames(s.AppLink, {}, [className, s[theme]])}
            {...otherProps}
        >
            {children}
        </Link>
    )
}


export default AppLink;


