import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { User, UserSchema } from '../types/user';
import { USER_LOCALSTORAGE_KEY } from 'shared/constants/localStorage';

const initialState: UserSchema = {};

export const UserSlice = createSlice({
    name: 'User',
    initialState,
    reducers: {
        setAuthData: (state, action: PayloadAction<User>) => {
            state.AuthData = action.payload
        },
        initAuthData: (state, action: PayloadAction<User>) => {
            const user = localStorage.getItem('user');
            if (user) {
                state.AuthData = JSON.parse(user);
            }
            state.AuthData = action.payload
        },
        logout: (state) => {
            state.AuthData = undefined;
            localStorage.removeItem(USER_LOCALSTORAGE_KEY);
        },
    },
});

// Action creators are generated for each case reducer function
export const { actions: UserActions } = UserSlice;
export const { reducer: UserReducer } = UserSlice;
