import classNames from '@/shared/library/ClassNames/classNames';
import s from './Tabs.module.scss';
import { ReactNode, useCallback } from 'react';
import { Card, CardTheme } from '../Card/Card';

export interface TabsItem {
  value: string;
  content: ReactNode;
}
interface TabsProps {
  className?: string;
  tabs: TabsItem[];
  value: string;
  onTabClick: (tab: TabsItem) => void;
}
export const Tabs = (props: TabsProps) => {
  const { className, tabs, value, onTabClick } = props;

  /*
  * @description: испольхуйте новый компонент
  * @deprecated
  */

  const clickHandle = useCallback(
    (tab: TabsItem) => {
      return () => {
        onTabClick(tab);
      };
    },
    [onTabClick],
  );
  return (
    <div className={classNames(s.Tabs, {}, [className])}>
      {tabs.map((tab) => (
        <Card
          className={s.tabs}
          key={tab.value}
          theme={tab.value === value ? CardTheme.NORMAL : CardTheme.OUTLINED}
          onClick={clickHandle(tab)}
        >
          {tab.content}
        </Card>
      ))}
    </div>
  );
};

export default Tabs;
