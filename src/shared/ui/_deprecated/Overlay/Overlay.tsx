import { memo } from 'react';
import { classNames } from '@/shared/library/ClassNames/classNames';
import cls from './Overlay.module.scss';

interface OverlayProps {
  className?: string;
  onClick?: () => void;
}

export const Overlay = memo((props: OverlayProps) => {
  const { className, onClick } = props;

  /*
  * @description: испольхуйте новый компонент
  * @deprecated
  */

  return (
    <div
      onClick={onClick}
      className={classNames(cls.Overlay, {}, [className])}
    />
  );
});
