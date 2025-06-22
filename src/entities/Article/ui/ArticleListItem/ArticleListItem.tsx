import { useTranslation } from 'react-i18next';
import { HTMLAttributeAnchorTarget, memo } from 'react';
import { classNames } from '@/shared/library/ClassNames/classNames';
import EyeIcon from '@/shared/assets/icons/eye-20-20.svg';

import { Article, ArticleTextBlock } from '../../model/types/article';
import { Text } from '@/shared/ui/_deprecated/Text';
import { Avatar } from '@/shared/ui/_deprecated/Avatar';
import { Card } from '@/shared/ui/_deprecated/Card';
import { Button, ButtonTheme } from '@/shared/ui/_deprecated/Button';
import { Icon } from '@/shared/ui/_deprecated/Icon';
import { AppLink } from '@/shared/ui/_deprecated/AppLink';
import { ArticleBlockType, ArticleView } from '../../model/consts/consts';
import cls from './ArticleListItem.module.scss';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import { getRouteArticleDetails } from '@/shared/const/router';
import { AppImage } from '@/shared/ui/_deprecated/AppImage';
import { Skeleton } from '@/shared/ui/_deprecated/Skeleton';

interface ArticleListItemProps {
  className?: string;
  article: Article;
  view: ArticleView;
  target?: HTMLAttributeAnchorTarget;
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
  const { className, article, view, target } = props;
  const { t } = useTranslation();

  const types = article.type ? (
    <Text text={article.type.join(', ')} className={cls.types} />
  ) : null;
  const views = (
    <>
      <Text text={String(article.views)} className={cls.views} />
      <Icon Svg={EyeIcon} />
    </>
  );

  if (view === ArticleView.BIG) {
    const textBlock = article.blocks.find(
      (block) => block.type === ArticleBlockType.TEXT,
    ) as ArticleTextBlock;

    /*
    * @description: испольхуйте новый компонент
    * @deprecated
    */

    return (
      <div
        className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
      >
        <Card className={cls.card}>
          <div className={cls.header}>
            <Avatar size={30} src={article.user.avatar} />
            <Text text={article.user.username} className={cls.username} />
            <Text text={article.createdAt} className={cls.date} />
          </div>
          <Text title={article.title} className={cls.title} />
          {types}
          <AppImage
            src={article.img}
            className={cls.img}
            alt={article.title}
            fallback={
              <Skeleton width={'100%'} height={200} className={cls.img} />
            }
            errorFallback={<Text text={t('Ошибка загрузки изображения')} />}
          />
          {textBlock && (
            <ArticleTextBlockComponent
              block={textBlock}
              className={cls.textBlock}
            />
          )}
          <div className={cls.footer}>
            <AppLink to={getRouteArticleDetails(article.id)} target={target}>
              <Button theme={ButtonTheme.OUTLINE}>{t('Читать далее')}</Button>
            </AppLink>
            {views}
          </div>
        </Card>
      </div>
    );
  }

  /*
  * deprecated
  */

  return (
    <AppLink
      target={target}
      to={getRouteArticleDetails(article.id)}
      className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
    >
      <Card className={cls.card}>
        <div className={cls.imageWrapper}>
          <AppImage
            alt={article.title}
            src={article.img}
            className={cls.img}
            fallback={
              <Skeleton width={'100%'} height={200} className={cls.img} />
            }
            errorFallback={<Text text={t('Ошибка загрузки изображения')} />}
          />
          <Text text={article.createdAt} className={cls.date} />
        </div>
        <div className={cls.infoWrapper}>
          {types}
          {views}
        </div>
        <Text text={article.title} className={cls.title} />
      </Card>
    </AppLink>
  );
});
