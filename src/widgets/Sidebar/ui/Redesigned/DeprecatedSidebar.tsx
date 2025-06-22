import { ButtonSize, ButtonTheme } from "@/shared/ui/_deprecated/Button";
import classNames from "@/shared/library/ClassNames/classNames";
import { Button } from "@/shared/ui/_deprecated/Button";
import { VStack } from "@/shared/ui/_deprecated/Stack";
import cls from './styles/Sidebar.module.scss';
import { ThemeSwitcher } from "@/features/ThemeSwitcher/ui/ThemeSwitcher";
import { LangSwitcher } from "@/features/LangSwitcher/LangSwitcher";

interface DeprecatedSidebarProps {
  className?: string;
  collapsed: boolean;
  onToggle: () => void;
  itemsList: React.ReactNode;
}


export const DeprecatedSidebar = (props: DeprecatedSidebarProps) => {
    const {
        className,
        collapsed,
        onToggle,
        itemsList
    } = props

  return (
    <aside
    data-testid="sidebar"
    className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
      className,
    ])}
  >
    <Button
      data-testid="sidebar-toggle"
      onClick={onToggle}
      className={cls.collapseBtn}
      theme={ButtonTheme.BACKGROUND_INVERTED}
      size={ButtonSize.L}
      square
    >
      {collapsed ? '>' : '<'}
    </Button>
    <VStack role="navigation" gap="8" className={cls.items}>
      {itemsList}
    </VStack>
    <div className={cls.switchers}>
      <ThemeSwitcher />
      <LangSwitcher short={collapsed} className={cls.lang} />
    </div>
  </aside>
  );
};