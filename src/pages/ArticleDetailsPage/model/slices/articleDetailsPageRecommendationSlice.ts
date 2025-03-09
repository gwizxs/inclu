import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Comment } from 'entities/Comment';
import { StateSchema } from 'app/providers/StoreProvider';

import { ArticleDetailsCommentsSchema } from '../types/ArticleDetailsCommentsSchema';
import { fetchCommentsByArticleId } from '../services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { IArticleDetailsPageRecommendationSchema } from '../types/articleDetailsPageRecommendationSchema';
import { Article, ArticleType } from 'entities/Article';

const recommendationsAdapter = createEntityAdapter<Article>({
    selectId: (article) => article.id,
});

export const getArticleRecommendations = recommendationsAdapter.getSelectors<StateSchema>(
    (state) => state.articleDetailsRecommendation || recommendationsAdapter.getInitialState(),
);

const articleDetailsCommentsSlice = createSlice({
    name: 'articleDetailsCommentsSlice',
    initialState: recommendationsAdapter.getInitialState<IArticleDetailsPageRecommendationSchema>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
    }),
    reducers: {},
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(fetchCommentsByArticleId.pending, (state) => {
    //             state.error = undefined;
    //             state.isLoading = true;
    //         })
    //         .addCase(fetchCommentsByArticleId.fulfilled, (
    //             state,
    //             action: PayloadAction<Comment[]>,
    //         ) => {
    //             state.isLoading = false;
    //             commentsAdapter.setAll(state, action.payload);
    //         })
    //         .addCase(fetchCommentsByArticleId.rejected, (state, action) => {
    //             state.isLoading = false;
    //             state.error = action.payload;
    //         });
    // },
});

export const {
    reducer: articleDetailsPageRecommendationReducer
} = articleDetailsCommentsSlice;
