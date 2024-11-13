


import { classNames } from "shared/lib/classNames";
import s from './PageError.module.scss'
import { useTranslation } from "react-i18next";
import Button from "shared/ui/Button/Button";


interface PageErrorProps {
    className?: string;
}

export const PageError = ({className}: PageErrorProps) => {
    const { t } = useTranslation();

    const RemovePage = () => {
        location.reload();
    }
    return (
        <div className={classNames(s.PageError, {}, [className])}>
            <h1 className={s.title}>{t('Произошла ошибка :(')}</h1>
            <Button className={s.button} onClick={RemovePage}>
                <span>
                    {t('Обновить страницу')}
                </span>
            </Button>
        </div>
    )
}

export default PageError;