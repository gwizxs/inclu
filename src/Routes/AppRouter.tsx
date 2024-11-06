import { Link, Route, Routes } from "react-router-dom";
import { MainPageAsync } from "../pages/Main/Main.async";
import { AboutPageAsync } from "../pages/About/About.async";
import { Suspense } from "react";
import '../styles/index.scss'
import { useTheme } from "../theme/useTheme";
import { classNames } from "../helpers/classNames/classNames";

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
