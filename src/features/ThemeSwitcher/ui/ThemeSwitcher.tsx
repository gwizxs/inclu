import { classNames } from '@/shared/library/ClassNames/classNames';
import { memo, useCallback } from 'react';
import { useTheme } from '@/app/providers/ThemeProvider';
import ThemeIcon from '@/shared/assets/icons/theme-light.svg';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { useAppDispatch } from '@/shared/library/hooks/useAppDispatch/useAppDispatch';
import { saveJsonSettings } from '@/entities/User/model/services/saveJsonSettings';
import { Icon } from '@/shared/ui/Icon';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();
  const dispatch = useAppDispatch();

  const onToggleHandler = useCallback(() => {
    toggleTheme((theme) => {
      dispatch(saveJsonSettings({ theme }));
    });
  }, [toggleTheme, dispatch]);

  return (
    <Button
      theme={ButtonTheme.CLEAR}
      className={classNames('', {}, [className])}
      onClick={onToggleHandler}
    >
      <Icon Svg={ThemeIcon} width={32} height={32} inverted />
    </Button>
  );
});
