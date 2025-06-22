import { classNames } from '@/shared/library/ClassNames/classNames';
import './Loader.scss';

interface LoaderProps {
  className?: string;
}

export const Loader = ({ className }: LoaderProps) => {
  /*
  * @description: испольхуйте новый компонент
  * @deprecated
  */

  return (
  <div className={classNames('lds-ellipsis', {}, [className])}>
    <div />
    <div />
    <div />
      <div />
    </div>
  );
};
