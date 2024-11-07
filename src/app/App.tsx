import { Link } from "react-router-dom";
import '../styles/index.scss'
import { classNames } from "shared/lib/classNames";
import { useTheme } from "app/providers/ThemeProvider";

export const App = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>TOGGLE</button>
            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>О сайте</Link>

        </div>
    );
};

 export default App;
