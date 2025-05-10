import { HTMLAttributes, memo, ReactNode } from 'react';
import { classNames } from '@/shared/library/ClassNames/classNames';
import s from './Card.module.scss';

export enum CardTheme {
    NORMAL = 'normal',
    OUTLINED = 'outlined',
}

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    children?: ReactNode;
    theme?: CardTheme;
    max?: boolean;
}

export const Card = memo((props: CardProps) => {
    const {
        className,
        children,
        theme = CardTheme.NORMAL,
        max,
        ...otherProps
    } = props;

    return (
        <div className={classNames(s.Card, { [s.max]: max }, [className, s[theme]])} {...otherProps}>
            {children}
        </div>
    );
});
