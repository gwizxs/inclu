
import './styles/index.scss'
import { classNames } from 'shared/lib/ClassNames/classNames';
import { useTheme } from "app/providers/ThemeProvider";
import { AppRouter } from './Routes';
import { Navbar } from "widgets/Navbar";
import { Sidebar } from 'widgets/Sidebar';
import { Suspense, useState } from 'react';
import Modal from 'shared/ui/Modal/Modal';
import Button, { ThemeButton } from 'shared/ui/Button/Button';


const App = () => {
    const { theme } = useTheme();


    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback=''>
                <Navbar />
                <button onClick={() => setIsOpen(true)} >Modal</button>
                <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>relikjglejkg</Modal>
                <div className='content-page'>
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};

export default App;
