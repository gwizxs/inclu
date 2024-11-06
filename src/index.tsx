import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./app/Routes/AppRouter";
import { ThemeProvider } from "app/providers/ThemeProvider";


render(
    <BrowserRouter>
        <ThemeProvider>
            <AppRouter />
        </ThemeProvider>
    </BrowserRouter>,
    document.getElementById('root')
)
