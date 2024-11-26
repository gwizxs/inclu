import { classNames, Mods } from "shared/lib/ClassNames/classNames"
import s from './Button.module.scss'
import { memo } from "react"

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
        theme = ThemeButton.OUTLINE,
        disabled,
        ...OtherProps
    } = props

    const mods: Mods = {
        [s[theme]]: true,
        [s.square]: square,
        [s[size]]: true,
        [s.disabled]: disabled
    }
    return (
        <button
            className={classNames(s.Button, mods, [className])}
            disabled={disabled}
            {...OtherProps}
        >
            {children}
        </button>
    )
});

export default Button