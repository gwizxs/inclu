import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig, ThunkExtraArg } from "app/providers/StoreProvider";
import { User, UserActions } from "entities/User";
import { USER_LOCALSTORAGE_KEY } from "shared/constants/localStorage";

interface LoginByUsername {
    username: string;
    password: string;
}


export const loginByUsername = createAsyncThunk<User, LoginByUsername, ThunkConfig<string>>(
    'login/loginByUsername',
    async (AuthData, API) => {
        const {extra, dispatch, rejectWithValue } = API;
        try {
            const response = await extra.api.post<User>('/login', AuthData);            
            if (!response.data) {
                throw new Error('error');
            }
            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
            dispatch(UserActions.setAuthData(response.data));
            extra.navigate('/about')
            
            return response.data

        } catch (e) {
            return rejectWithValue('error');
        }
    }
)

export default loginByUsername;