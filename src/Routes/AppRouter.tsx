import { Link, Route, Routes } from "react-router-dom";
import { MainPageAsync } from "../pages/Main/Main.async";
import { AboutPageAsync } from "../pages/About/About.async";
import { Suspense } from "react";
import '../styles/index.scss'
import { useTheme } from "../theme/useTheme";

export const AppRouter = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={`app ${theme || 'normal'}`}>
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

