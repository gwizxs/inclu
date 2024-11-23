import { classNames } from 'shared/lib/ClassNames/classNames';
import { AppRouter } from './Routes';
import  {Navbar}  from "widgets/Navbar";
import { Sidebar } from 'widgets/Sidebar';
import { Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { UserActions } from 'entities/User';
import { useNavigate } from 'react-router-dom';

function App() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(UserActions.initAuthData());
    }, [dispatch])

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
