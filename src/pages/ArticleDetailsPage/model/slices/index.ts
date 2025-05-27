import { combineReducers } from '@reduxjs/toolkit';
import { ArticleDetailsPageSchema } from '../types';
import { articleDetailsCommentsReducer } from './articleDetailsCommentsSlice';
import { articleDetailsPageRecommendationReducer } from './articleDetailsPageRecommendationSlice';

export const articleDetailsPageReducer =
  combineReducers<ArticleDetailsPageSchema>({
    comments: articleDetailsCommentsReducer as any,
    recommendations: articleDetailsPageRecommendationReducer as any,
  });
