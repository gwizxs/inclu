import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LoginSchema } from '../types/loginSchema';

const initialState: LoginSchema = {
    username: '',
    password: '',
    isLoading: false,
};

export const LoginSlice = createSlice({
    name: 'Login',
    initialState,
    reducers: {
        setUsername: (state, action: PayloadAction<string>) => {
            state.username = action.payload
        },
        setPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload
        },
    },
});

// Action creators are generated for each case reducer function
export const { actions: loginActions } = LoginSlice;
export const { reducer: loginReducer } = LoginSlice;
