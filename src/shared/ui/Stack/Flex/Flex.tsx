import classNames, { Mods } from '@/shared/lib/ClassNames/classNames';
import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
import s from './Flex.module.scss';

export type FlexJustify = 'start' | 'center' | 'end' | 'between' | 'around'
export type FlexAlign = 'start' | 'center' | 'end'
export type FlexDirection = 'row' | 'column'
export type FlexGap = 4 | 8 | 16 | 24 | 32

const justifyClasses: Record<FlexJustify, string> = {
    start: s.justify__start,
    center: s.justify__center,
    end: s.justify__end,
    between: s.justify__between,
    around: s.justify__around,
};

const alignClasses: Record<FlexAlign, string> = {
    start: s.align__start,
    center: s.align__center,
    end: s.align__end,
};

const directionClasses: Record<FlexDirection, string> = {
    row: s.direction__row,
    column: s.direction__column,
};

const gapClasses: { [key in FlexGap as string]: string } = {
    4: s.gap_4,
    8: s.gap_8,
    16: s.gap_16,
    24: s.gap_24,
    32: s.gap_32,
};

type DivProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
export interface FlexProps extends DivProps {
    justify?: FlexJustify
    align?: FlexAlign
    direction: FlexDirection
    className?: string
    children: ReactNode
    gap?: string
    max?: boolean
}

export const Flex = (props: FlexProps) => {
    const {
        justify = 'start',
        align = 'center',
        direction = 'row',
        className,
        children,
        gap,
        max,
    } = props;

    const classes = [
        className,
        justifyClasses[justify],
        alignClasses[align],
        directionClasses[direction],
        gap && gapClasses[gap],
    ];

    const mods: Mods = {
        [s.max]: max,
    };
    return (
        <div
            className={classNames(s.Flex, mods, classes)}
        >
            {children}
        </div>
    );
};
