import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
import { User, UserActions } from "entities/User";
import { USER_LOCALSTORAGE_KEY } from "shared/constants/localStorage";
import { DEFAULT_URL } from "shared/constants/main";

interface LoginByUsername {
    username: string;
    password: string;
}


export const loginByUsername = createAsyncThunk<User, LoginByUsername, { rejectValue: string }>(
    'login/loginByUsername',
    async (AuthData, API) => {
        try {
            const response = await axios.post(`${DEFAULT_URL}/login`, AuthData);
            
            if (!response.data) {
                throw new Error('error');
            }
            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
            API.dispatch(UserActions.setAuthData(response.data));
            
            return response.data

        } catch (e) {
            return API.rejectWithValue('error');
        }
    }
)

export default loginByUsername;