import { memo } from 'react';
import { useSelector } from 'react-redux';
import { getUserAuthData } from '@/entities/User';
import { SidebarItemType } from '../../model/types/sidebar';
import { ToggleFeatures } from '@/shared/library/features';
import { DeprecatedSidebarItem } from '../Redesigned/SidebarItem/DeprecatedSidebarItem';
import { RedesignedSidebarItem } from '../Redesigned/SidebarItem/RedesignedSidebarItem';

interface SidebarItemProps {
  item: SidebarItemType;
  collapsed: boolean;
}

export const SidebarItem = memo(({ item, collapsed }: SidebarItemProps) => {
  const isAuth = useSelector(getUserAuthData);

  if (item.authOnly && !isAuth) {
    return null;
  }

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={<RedesignedSidebarItem item={item} collapsed={collapsed} />}
      off={<DeprecatedSidebarItem item={item} collapsed={collapsed} />}
    />
  );
});
