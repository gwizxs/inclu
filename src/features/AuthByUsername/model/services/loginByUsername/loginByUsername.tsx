import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'


const loginByUsername = createAsyncThunk(
    'login/loginByUsername',
    async (userid, API) => {
        try {
            const response = await axios.post('http://localhost:8000/login', authData);
            return response.data
        }
    }
)