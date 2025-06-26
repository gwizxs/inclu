import { memo } from 'react';
import cls from './AppLogo.module.scss';

import { classNames } from '@/shared/library/ClassNames/classNames';
import { HStack } from '../../_deprecated/Stack';
import AppSvg from '@/shared/assets/icons/profile-20-20.svg';

interface AppLogoProps {
    className?: string;
    size?: number;
}

export const AppLogo = memo(({ className, size = 50 }: AppLogoProps) => {

    return (
        <HStack
            max
            justify="center"
            className={classNames(cls.appLogoWrapper, {}, [className])}
        >
            <div className={cls.gradientBig} />
            <div className={cls.gradientSmall} />
            <AppSvg className={cls.appLogo} width={size} height={size} color='black' />
        </HStack>
    );
});
