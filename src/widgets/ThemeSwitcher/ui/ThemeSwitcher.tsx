import { useTheme } from "app/providers/ThemeProvider";
import { classNames } from "shared/lib/classNames";
import s from './ThemeSwitcher.module.scss'

interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher = ({className}: ThemeSwitcherProps  ) => {
    const {toggleTheme} = useTheme();
    return (
        <button
         className={classNames(s.ThemeSwitcher, {}, [className])}
         onClick={toggleTheme}
         >eedeee</button>
    )
    
}

export default ThemeSwitcher;