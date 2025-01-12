import { classNames } from 'shared/lib/ClassNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './NotFoundPage.module.scss';
import { memo } from 'react';

interface NotFoundPageProps {
    className?: string;
}

export const NotFoundPage = ({ className }: NotFoundPageProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.NotFoundPage, {}, [className])}>
            {t('Страница не найдена')}
        </div>
    );
};

export default memo(NotFoundPage)