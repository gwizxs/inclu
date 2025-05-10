import { Article } from '@/entities/Article';
import { rtkApi } from '@/shared/api/rtkApi';

const recommendationsApi = rtkApi.injectEndpoints({
    endpoints: (builder) => ({
        getArticleRecommendationsList: builder.query<Article[], number>({
            query: (limit) => ({
                url: '/articles/recommendations',
                params: {
                    _limit: limit,
                },
            }),
        }),
    }),
});

export const useArticleRecommendationsListQuery = recommendationsApi.useGetArticleRecommendationsListQuery;
