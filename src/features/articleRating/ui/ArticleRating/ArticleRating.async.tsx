import { lazy, memo, Suspense } from 'react';
import { Skeleton } from '@/shared/ui/Skeleton';
import { ArticleRatingProps } from './ArticleRating';

export const ArticleRatingLazy = lazy(() => import('./ArticleRating'));

export const ArticleRatingAsync = memo(
    (props: ArticleRatingProps) => (
        <Suspense fallback={<Skeleton width="100%" height={120} />}>
            <ArticleRatingLazy {...props} />
        </Suspense>
    ),
);
