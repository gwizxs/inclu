import { classNames } from 'shared/lib/ClassNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './NotFoundPage.module.scss';
import { memo } from 'react';
import { Page } from 'widgets/Page/Page';

interface NotFoundPageProps {
    className?: string;
}

export const NotFoundPage = ({ className }: NotFoundPageProps) => {
    const { t } = useTranslation();
    return (
        <Page className={classNames(cls.NotFoundPage, {}, [className])}>
            {t('Страница не найдена')}
        </Page>
    );
};

export default memo(NotFoundPage)