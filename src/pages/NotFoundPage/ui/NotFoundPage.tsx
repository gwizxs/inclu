import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/ClassNames/classNames";
import s from './NotFoundPage.module.scss'
import { memo } from "react";



interface NotFoundPageProps {
    className?: string;
}

export const NotFoundPage = memo(({ className }: NotFoundPageProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(s.NotFoundPage, {}, [className])}>
            {t('Страница не найдена')}
        </div>
    );
})

export default NotFoundPage;