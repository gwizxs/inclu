import { useTheme } from "app/providers/ThemeProvider";
import { classNames } from "shared/lib/classNames";
import s from './ThemeSwitcher.module.scss'
import LightIcon from 'shared/assets/icons/theme-light.svg'
import DarkIcon from 'shared/assets/icons/theme-dark.svg'
import { Theme } from "app/providers/ThemeProvider";
import Button, { ThemeButton } from "shared/ui/Button/Button";

interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher = ({className}: ThemeSwitcherProps  ) => {
    const {theme, toggleTheme} = useTheme();
    return (
        <Button
        theme={ThemeButton.CLEAR}
         className={classNames(s.ThemeSwitcher, {}, [className])}
         onClick={toggleTheme}
         >
            {theme === Theme.DARK ? <LightIcon /> : <DarkIcon />}
         </Button>
    )
    
}

export default ThemeSwitcher;