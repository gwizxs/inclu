import { Link, Route, Routes } from "react-router-dom";
import { MainPageAsync } from "pages/Main";
import { AboutPageAsync } from "pages/About";
import { Suspense } from "react";
import '../styles/index.scss'
import { classNames } from "helpers/classNames/classNames";
import { useTheme } from "app/providers/ThemeProvider";

export const AppRouter = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>TOGGLE</button>
            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>О сайте</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/about'} element={<AboutPageAsync />} />
                    <Route path={'/'} element={<MainPageAsync />} />
                </Routes>
            </Suspense>
        </div>
    );
};

 export default AppRouter
