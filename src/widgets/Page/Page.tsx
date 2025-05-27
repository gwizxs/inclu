import classNames from '@/shared/library/ClassNames/classNames';
import { MutableRefObject, ReactNode, useRef, UIEvent } from 'react';
import { useInfiniteScroll } from '@/shared/library/hooks/useInfiniteScroll/useInfiniteScroll';
import { useAppDispatch } from '@/shared/library/hooks/useAppDispatch/useAppDispatch';
import {
  getScrollByPath,
  ScrollRecoveryActions,
} from '@/features/ScrollRecovery';
import { useLocation } from 'react-router-dom';
import { useInitialEffect } from '@/shared/library/hooks/useInitialEffect/useInitialEffect';
import { useSelector } from 'react-redux';
import { StateSchema } from '@/app/providers/StoreProvider';
import { useThrottle } from '@/shared/library/hooks/useThrottle/useThrottle';
import s from './Page.module.scss';
import { TestProps } from '@/shared/types/tests';

interface PageProps extends TestProps {
  className?: string;
  children?: ReactNode;
  onScrollEnd?: () => void;
}

export const PAGE_ID = 'PAGE_ID';

export const Page = (props: PageProps) => {
  const { className, children, onScrollEnd } = props;
  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
  const dispatch = useAppDispatch();
  const location = useLocation();
  const { pathname } = location;
  const scrollPosition = useSelector((state: StateSchema) =>
    getScrollByPath(state, pathname),
  );

  useInfiniteScroll({
    triggerRef,
    wrapperRef,
    callback: onScrollEnd,
  });

  useInitialEffect(() => {
    wrapperRef.current.scrollTop = scrollPosition;
  });

  const onScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
    dispatch(
      ScrollRecoveryActions.setScrollPosition({
        path: pathname,
        position: e.currentTarget.scrollTop,
      }),
    );
  }, 500);
  return (
    <main
      ref={wrapperRef}
      className={classNames(s.Page, {}, [className])}
      onScroll={onScroll}
      id={PAGE_ID}
      data-testid={props['data-testid'] ?? 'Page'}
    >
      {children}
      {onScrollEnd ? <div className={s.trigger} ref={triggerRef} /> : null}
    </main>
  );
};
