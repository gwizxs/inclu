import { Article } from 'entities/Article';
import { API_URL } from 'shared/api/api_url';
import { rtkApi } from 'shared/api/rtkApi';

const recommendationsApi = rtkApi.injectEndpoints({
    endpoints: (builder) => ({
        getArticleRecommendationsList: builder.query<Article[], number>({
            query: (limit) => ({
                url: API_URL.articles(),
                params: {
                    _limit: limit,
                },
            }),
        }),
    }),
});

export const useArticleRecommendationsListQuery = recommendationsApi.useGetArticleRecommendationsListQuery;
