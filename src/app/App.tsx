import { classNames } from 'shared/lib/ClassNames/classNames';
import { AppRouter } from './Routes';
import  {Navbar}  from "widgets/Navbar";
import { Sidebar } from 'widgets/Sidebar';
import { Suspense } from 'react';

const App = () => {

    return (
        <div className={classNames('app', {}, [])}>
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
