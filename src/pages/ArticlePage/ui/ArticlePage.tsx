import { memo } from 'react';
import { useTranslation } from 'react-i18next';

const ArticlePage = () => {
    const { t } = useTranslation();

    return (
        <div>
            {t('Страница статьи')}
        </div>
    );
};

export default memo(ArticlePage);