import { useTranslation } from 'react-i18next';
import { useMemo } from 'react';
import classNames from '@/shared/library/ClassNames/classNames';
import { Select, SelectOption } from '@/shared/ui/_deprecated/Select';
import { ArticleSortField } from '@/entities/Article';
import { SortOrder } from '@/shared/types/sort';
import s from './ArticleSortSelector.module.scss';

interface ArticleSortSelectorProps {
  className?: string;
  sort: ArticleSortField;
  order: SortOrder;
  onChangeOrder: (newOrder: SortOrder) => void;
  onChangeSort: (newSort: ArticleSortField) => void;
}
export const ArticleSortSelector = (props: ArticleSortSelectorProps) => {
  const { className, sort, order, onChangeOrder, onChangeSort } = props;
  const { t } = useTranslation();

  const orderOptions = useMemo<SelectOption<SortOrder>[]>(
    () => [
      {
        value: 'asc',
        content: t('По возрастанию'),
      },
      {
        value: 'desc',
        content: t('По убыванию'),
      },
    ],
    [t],
  );

  const sortFieldOrderOptions = useMemo<SelectOption<ArticleSortField>[]>(
    () => [
      {
        value: ArticleSortField.CREATED,
        content: t('По дате'),
      },
      {
        value: ArticleSortField.TITLE,
        content: t('По названию'),
      },
      {
        value: ArticleSortField.VIEWS,
        content: t('По просмотрам'),
      },
    ],
    [t],
  );

  return (
    <div className={classNames(s.ArticleSortSelector, {}, [className])}>
      <Select
        options={sortFieldOrderOptions}
        label={t('Сортировать ПО')}
        value={sort}
        onChange={onChangeSort}
      />
      <Select
        options={orderOptions}
        label={t('По убыванию')}
        value={order}
        onChange={onChangeOrder}
        className={s.order}
      />
    </div>
  );
};
