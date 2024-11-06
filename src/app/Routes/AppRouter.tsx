import { Link, Route, Routes } from "react-router-dom";

import { Suspense } from "react";
import '../styles/index.scss'
import { classNames } from "shared/lib/classNames";
import { useTheme } from "app/providers/ThemeProvider";
import { Main } from "pages/Main";
import { About } from "pages/About";

export const AppRouter = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>TOGGLE</button>
            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>О сайте</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/about'} element={<About />} />
                    <Route path={'/'} element={<Main />} />
                </Routes>
            </Suspense>
        </div>
    );
};

 export default AppRouter
