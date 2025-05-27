import { ArticleDetailsCommentsSchema } from './ArticleDetailsCommentsSchema';
import { IArticleDetailsPageRecommendationSchema } from './articleDetailsPageRecommendationSchema';

export interface ArticleDetailsPageSchema {
  comments: ArticleDetailsCommentsSchema;
  recommendations: IArticleDetailsPageRecommendationSchema;
}
