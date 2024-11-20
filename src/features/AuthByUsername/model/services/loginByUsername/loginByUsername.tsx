import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
import { User } from "entities/User";
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
            
            return response.data

        } catch (e) {
            return API.rejectWithValue('error');
        }
    }
)

export default loginByUsername;