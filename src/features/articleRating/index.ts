export type { Rating } from '@/entities/RatingCard';
export { ArticleRatingAsync as ArticleRating } from './ui/ArticleRating/ArticleRating.async';
export { useGetArticleRating, useRateArticle } from './api/articleRatingApi';
