import { classNames } from "shared/lib/ClassNames/classNames"
import s from './Button.module.scss'
import { FC, memo } from "react"

export enum ThemeButton {
    CLEAR = 'clear',
    OUTLINE = 'outline',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted'

}

export enum ButtonSize {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl'
}

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ThemeButton;
    square?: boolean;
    size?: string;
    disabled?: boolean
}

export const Button = memo((props: IButtonProps) => {
    const {
        className,
        children,
        square,
        size = ButtonSize.M,
        theme,
        disabled,
        ...OtherProps
    } = props

    const mods: Record<string, boolean> = {
        [s[theme]]: true,
        [s.square]: square,
        [s[size]]: true,
        [s.disabled]: disabled
    }
    return (
        <button
            className={classNames(s.Button, {}, [className, s[theme]])}
            disabled={disabled}
            {...OtherProps}
        >
            {children}
        </button>
    )
});

export default Button