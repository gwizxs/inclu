import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import {  getArticlesPageInited } from '../../selectors/articlesPageSelectors';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';
import { articlesPageActions } from '../../slices/articlesPageSlice';
import { ArticleSortField, ArticleType } from '@/entities/Article';
import { SortOrder } from '@/shared/types/sort';

export const initedArticlePage = createAsyncThunk<
    // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
    void,
    URLSearchParams,
    ThunkConfig<string>
    >(
        'articlesPage/initedArticlesPage',
        async (searchParams, thunkApi) => {
            const { getState, dispatch } = thunkApi;
            const inited = getArticlesPageInited(getState());

            if (!inited) {
                const orderFromUrl = searchParams.get('order') as SortOrder;  
                const sortFromUrl = searchParams.get('sort') as ArticleSortField; 
                const searchFromUrl = searchParams.get('search') as string; 
                const TypeFormUrl = searchParams.get('type') as ArticleType;
                
                if(orderFromUrl) {
                    dispatch(articlesPageActions.setOrder(orderFromUrl));
                }
                if(orderFromUrl) {
                    dispatch(articlesPageActions.setSort(sortFromUrl));
                }
                if(orderFromUrl) {
                    dispatch(articlesPageActions.setSearch(searchFromUrl));
                }
                if(TypeFormUrl) {
                    dispatch(articlesPageActions.setType(TypeFormUrl));
                }
                dispatch(articlesPageActions.initState());
                dispatch(fetchArticlesList({}));
            }
        },
    );
