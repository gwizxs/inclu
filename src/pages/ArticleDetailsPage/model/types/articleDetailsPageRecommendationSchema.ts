import { EntityState } from "@reduxjs/toolkit";
import { Article } from "@/entities/Article";

export interface IArticleDetailsPageRecommendationSchema extends EntityState<Article, string> {
    isLoading: boolean;
    error?: string
}