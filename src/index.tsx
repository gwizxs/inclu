import {render} from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./Routes/AppRouter";

render(
    <BrowserRouter>
    <AppRouter/>
    </BrowserRouter>,
    document.getElementById('root')
)
