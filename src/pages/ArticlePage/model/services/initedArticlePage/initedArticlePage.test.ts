import { TestAsyncThunk } from '@/shared/library/tests/TestAsyncThunk/TestAsyncThunk';
import { initedArticlePage } from './initedArticlePage';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

jest.mock('../fetchArticlesList/fetchArticlesList');

describe('initedArticlePage.test', () => {
  test('success', async () => {
    const searchParams = new URLSearchParams();
    const thunk = new TestAsyncThunk(initedArticlePage, {
      articlesPage: {
        page: 2,
        ids: [],
        entities: {},
        limit: 5,
        isLoading: false,
        hasMore: true,
        _inited: false,
      },
    });

    await thunk.callThunk(searchParams);

    expect(thunk.dispatch).toBeCalledTimes(4);
    expect(fetchArticlesList).toHaveBeenCalledWith({});
  });

  test('already inited', async () => {
    const searchParams = new URLSearchParams();
    const thunk = new TestAsyncThunk(initedArticlePage, {
      articlesPage: {
        page: 2,
        ids: [],
        entities: {},
        limit: 5,
        isLoading: false,
        hasMore: true,
        _inited: true,
      },
    });

    await thunk.callThunk(searchParams);

    expect(thunk.dispatch).toBeCalledTimes(2);
    expect(fetchArticlesList).not.toHaveBeenCalled();
  });
});
