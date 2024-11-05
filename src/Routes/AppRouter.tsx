import { Link, Route, Routes } from "react-router-dom";
import { MainPageAsync } from "../pages/Main/Main.async";
import { AboutPageAsync } from "../pages/About/About.async";
import { Suspense } from "react";




export const AppRouter = () => {
    return (
        <div>
            <Link to={'/'}>main</Link>
            <Link to={'/about'}>about</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={"/about"} element={<AboutPageAsync />}></Route>
                    <Route path={"/"} element={<MainPageAsync />}></Route>
                </Routes>
            </Suspense>
        </div>
    );
};