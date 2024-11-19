import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from "./ThemeContext";
import { useContext, useState } from "react";

interface UseThemeResult {
    toggleTheme: () => void;
    theme: Theme;
}

export function useTheme(): UseThemeResult {
    const { theme: initialTheme } = useContext(ThemeContext);
    const [theme, setTheme] = useState<Theme>(initialTheme);

    const toggleTheme = () => {
        const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK
        setTheme(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
        document.body.className = newTheme;

    }



    return {
        theme,
        toggleTheme,
    }
}

