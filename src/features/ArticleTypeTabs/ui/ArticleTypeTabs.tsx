import { ArticleType } from "entities/Article"
import { useTranslation } from "react-i18next";
import classNames from "shared/lib/ClassNames/classNames";
import Tabs, { TabsItem } from "shared/ui/Tabs/Tabs";
import { useCallback, useMemo } from "react";

interface ArticleTypeTabsProps {
    className?: string;
    value: ArticleType;
    onChangeType: (type: ArticleType) => void
}

export const ArticleTypeTabs = (props: ArticleTypeTabsProps) => {
    const { className, value, onChangeType } = props
    const { t } = useTranslation();

    const onTabClick = useCallback((tab: TabsItem) => {
        onChangeType(tab.value as ArticleType)
    }, [onChangeType]);

    const typeTabs = useMemo<TabsItem[]>(() => [
        {
            value: ArticleType.ALL,
            content: t('Все'),
        },
        {
            value: ArticleType.IT,
            content: t('IT'),
        },
        {
            value: ArticleType.SCIENCE,
            content: t('Наука'),
        },
        {
            value: ArticleType.ECONOMICS,
            content: t('Экономика'),
        },
    ], [t])

    return (
        <Tabs
            className={classNames('', {}, [className])}
            tabs={typeTabs}
            value={value}
            onTabClick={onTabClick}
        />
    );
};