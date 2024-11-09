
import './styles/index.scss'
import { classNames } from 'shared/lib/classNames';
import { useTheme } from "app/providers/ThemeProvider";
import { AppRouter } from './Routes';
import { Navbar } from "widgets/Navbar";
import { Sidebar } from 'widgets/Sidebar';
import { Suspense } from 'react';
import { useTranslation } from 'react-i18next';


const Components = () => {
    const { t, i18n } = useTranslation();

    const toogle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    }

    return (
        <div>
            <h1>{t('тест')}</h1>
            <button onClick={toogle}>перевод</button>
        </div>
    );
}


const App = () => {
    const { theme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback=''>
                <Navbar />
                <Components/>
                <div className='content-page'>
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};

export default App;
