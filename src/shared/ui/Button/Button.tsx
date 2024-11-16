import { classNames } from "shared/lib/ClassNames/classNames"
import s from './Button.module.scss'
import { FC } from "react"

export enum ThemeButton {
    CLEAR = 'clear',
    OUTLINE = 'outline',

}

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ThemeButton
}

export const Button: FC<IButtonProps> = (props) => {
    const {
        className,
        children,
        theme,
        ...OtherProps
    } = props
    return (
        <button
            className={classNames(s.Button, {}, [className, s[theme]])}
            {...OtherProps}>
            {children}
        </button>
    )
}

export default Button