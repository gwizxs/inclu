import { memo, FC, SVGProps } from 'react';
import { classNames } from '@/shared/library/ClassNames/classNames';
import cls from './Icon.module.scss';

interface IconBaseProps extends SVGProps<SVGSVGElement> {
  className?: string;
  Svg: React.FC<SVGProps<SVGSVGElement>>;
  size?: number;
}


interface NonClickIconProps extends IconBaseProps {
    clickable?: false;
  }

    interface ClickIconProps extends IconBaseProps {
    clickable: true;
    onClick: () => void;
  }

  type IconProps = NonClickIconProps | ClickIconProps;

export const Icon: FC<IconProps> = memo((props) => {
  const { className, Svg, size = 32, clickable, ...otherProps } = props;

  const icon = (
    <Svg
    width={size}
    height={size}
    className={classNames(cls.Icon, {}, [
      className,
    ])}
    {...otherProps}
  />
  )

  if (clickable) {
    return (
      <button type='button' onClick={props.onClick}>
            {icon}
      </button>
    );
  }

  return icon;
});
