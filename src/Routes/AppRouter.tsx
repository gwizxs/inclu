import { Link, Route, Routes } from "react-router-dom";
import { About } from "../pages/About/About";
import { Main } from "../pages/Main/Main";



export const AppRouter = () => {
    return (
        <div>
        <Link to={'/'}>main</Link>
        <Link to={'/about'}>about</Link>

        <Routes>
            <Route path={"/about"} element={<About/>}></Route>
            <Route path={"/"} element={<Main/>}></Route>
        </Routes>
        </div>
    );
};