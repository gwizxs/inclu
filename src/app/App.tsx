
import './styles/index.scss'
import { classNames } from "shared/lib/classNames";
import { useTheme } from "app/providers/ThemeProvider";
import { Navbar } from "widgets/Navbar";
import { AppRouter } from "./Routes";

export const App = () => {
    const {theme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar/>
            <AppRouter/>
        </div>
    );
};

 export default App;


