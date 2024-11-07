import { useTheme } from "app/providers/ThemeProvider";
import { classNames } from "shared/lib/classNames";
import s from './ThemeSwitcher.module.scss'



export const ThemeSwitcher = () => {
    const {theme, toggleTheme} = useTheme();
    return (
        <button
         className={classNames(s.ThemeSwitcher, {}, [classNames(s[theme])])}
         onClick={toggleTheme}
         >eedeee</button>
    )
    
}

export default ThemeSwitcher;