import axios from "axios";
import loginByUsername from "./loginByUsername";
import { Dispatch } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";
import { UserActions } from "entities/User";
import { TestAsyncThunk } from "shared/lib/test/testAsyncThunk/testAsyncThunk";

jest.mock('axios')

const mockedAxios = jest.mocked(axios, true)

describe('loginByUsername.test', () => {
    let dispatch: Dispatch;
    let getState: () => StateSchema;
    
    beforeEach(() => {
        dispatch = jest.fn();
        getState = jest.fn();
    })
    test('success login', async () => {
        const UserValue =  { username: '123', id: '1' } 
        mockedAxios.post.mockReturnValue(Promise.resolve({ data: UserValue }));


        const thunk = new TestAsyncThunk(loginByUsername);
        const result = await thunk.callThunk({ username: '123', password: '123' });


        expect(thunk.dispatch).toHaveBeenCalledWith(UserActions.setAuthData(UserValue));
        expect(thunk.dispatch).toHaveBeenCalledTimes(3);
        expect(mockedAxios.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(UserValue);
    });

    test('error login 403', async () => {
        mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));
        

        const thunk = new TestAsyncThunk(loginByUsername);
        const result = await thunk.callThunk({ username: '123', password: '123' });
        
        expect(mockedAxios.post).toHaveBeenCalled();
        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toBe('error');
    });
})
