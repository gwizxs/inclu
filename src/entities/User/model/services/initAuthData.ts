import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { getUserDataByIdQuery } from '../../api/useApi';
import { User } from '../types/user';
import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localstorage';

export const initAuthData = createAsyncThunk<
  User,
  void,
  ThunkConfig<string>
>('user/initAuthData', async (_, thunkApi) => {
  const { rejectWithValue, dispatch } = thunkApi;

  const userId = localStorage.getItem(USER_LOCALSTORAGE_KEY);

  if (!userId) {
    return rejectWithValue('user not found');
  }

  try {
    const response = await dispatch(getUserDataByIdQuery(userId)).unwrap();

    if (!response) {
      return rejectWithValue('error');
    }

    return response;
  } catch (e) {
    console.log(e);
    return rejectWithValue('error during saving settings');
  }
});
