import { CSSProperties, memo, useMemo } from 'react';
import s from './Avatar.module.scss';
import { classNames, Mods } from '@/shared/library/ClassNames/classNames';
import { AppImage } from '../AppImage';
import UserFilled from '@/shared/assets/icons/user-filled.svg';
import { Icon } from '../Icon';
import { Skeleton } from '../Skeleton';

interface AppLinkProps {
  className?: string;
  src?: string;
  size?: number;
  alt?: string;
  fallbackInverted?: boolean;
}

export const Avatar = memo((props: AppLinkProps) => {
  const { className, src, size = 100, alt, fallbackInverted } = props;

  const mods: Mods = {};

  const styles = useMemo<CSSProperties>(
    () => ({
      width: size,
      height: size,
    }),
    [size],
  );

  const ErrorFallback = (
    <Icon
      width={size}
      height={size}
      Svg={UserFilled}
      inverted={fallbackInverted}
    />
  );
  const Fallback = <Skeleton border={'50%'} width={size} height={size} />;
  return (
    <AppImage
      src={src}
      alt={alt}
      style={styles}
      className={classNames(s.Avatar, mods, [className])}
      fallback={Fallback}
      errorFallback={ErrorFallback}
    />
  );
});
