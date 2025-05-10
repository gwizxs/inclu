import { CSSProperties, memo, useMemo } from "react";
import s from './Avatar.module.scss'
import { classNames, Mods } from "@/shared/library/ClassNames/classNames";

interface AppLinkProps {
    className?: string;
    src?: string;
    size?: number;
    alt?: string
}

export const Avatar = memo((props: AppLinkProps) => {
    const {
        className,
        src,
        size,
        alt
    } = props

    const mods: Mods = {

    }

    const styles = useMemo<CSSProperties>(() => ({
        width: size || 100,
        height: size || 100,
    }), [size])

    return (
        <img
            src={src}
            alt={alt}
            style={styles}
            className={classNames(s.Avatar, mods, [className])}
        />
    );
}
)
