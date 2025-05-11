import { ImgHTMLAttributes, ReactElement, ReactNode, useLayoutEffect, useState } from "react";

interface AppImageProps extends ImgHTMLAttributes<HTMLImageElement> {
    className?: string;
    fallback?: ReactNode;
    errorFallback?: ReactNode;
}

export const AppImage = (props: AppImageProps): ReactElement => {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);

    const {
        className,
        src,
        alt = '',
        fallback,
        errorFallback,
        ...otherProps
    } = props;

    useLayoutEffect(() => {
        const img = new Image();
        img.src = src ?? '';
        img.onload = () => {
            setIsLoading(false);
        };
        img.onerror = () => {
            setIsLoading(false);
            setError(true);
        };
    }, [src]);

    if (isLoading && fallback) {
        return fallback as ReactElement;
    }

    if (error && errorFallback) {
        return errorFallback as ReactElement;
    }

    return (
        <img
            src={src}
            alt={alt}
            className={className}
            {...otherProps}
        />
    );
}