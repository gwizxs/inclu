import { createSlice } from '@reduxjs/toolkit';
import { UserSchema } from '../types/user';

const initialState: UserSchema = {};

export const UserSlice = createSlice({
    name: 'User',
    initialState,
    reducers: {
    },
});

// Action creators are generated for each case reducer function
export const { actions: UserActions } = UserSlice;
export const { reducer: UserReducer } = UserSlice;
