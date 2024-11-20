import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { User, UserSchema } from '../types/user';

const initialState: UserSchema = {};

export const UserSlice = createSlice({
    name: 'User',
    initialState,
    reducers: {
        setAuthData: (state, action: PayloadAction<User>) => {
            state.AuthData = action.payload
        }
    },
});

// Action creators are generated for each case reducer function
export const { actions: UserActions } = UserSlice;
export const { reducer: UserReducer } = UserSlice;
