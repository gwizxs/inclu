import { classNames } from '@/shared/library/ClassNames/classNames';
import { Loader } from '@/shared/ui/_deprecated/Loader';
import cls from './PageLoader.module.scss';

interface PageLoaderProps {
  className?: string;
}

export const PageLoader = ({ className }: PageLoaderProps) => (
  <div className={classNames(cls.PageLoader, {}, [className])}>
    <Loader />
  </div>
);
