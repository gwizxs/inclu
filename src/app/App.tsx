import { classNames } from 'shared/lib/ClassNames/classNames';
import { useTheme } from "app/providers/ThemeProvider";
import { AppRouter } from './Routes';
import  {Navbar}  from "widgets/Navbar";
import { Sidebar } from 'widgets/Sidebar';
import { Suspense } from 'react';
import './styles/index.scss';

const App = () => {
    const { theme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback=''>
                <Navbar />
                <div className='content-page'>
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};

export default App;
