import { memo, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import { getSidebarItems } from '../../model/selector/GetSidebarItems';
import { ToggleFeatures } from '@/shared/library/features';
import { DeprecatedSidebar } from '../Redesigned/DeprecatedSidebar';
import { RedisignedSidebar } from '../Redesigned/RedisignedSidebar';
import { MainLayout } from '@/shared/layouts';
interface SidebarProps {
  className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const SidebarItemsList = useSelector(getSidebarItems);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  const itemsList = useMemo(
    () =>
      SidebarItemsList.map((item) => (
        <SidebarItem item={item} collapsed={collapsed} key={item.path} />
      )),
    [collapsed, SidebarItemsList],
  );

  return (
    <ToggleFeatures
      feature={'isAppRedesigned'}
      on={
        <RedisignedSidebar
          className={className}
          collapsed={collapsed}
        />
      }


      off={
        <DeprecatedSidebar
          className={className}
          collapsed={collapsed}
          onToggle={onToggle}
          itemsList={itemsList}
        />
      }
    />
  );
});
