import { loginActions, loginReducer } from "./LoginSlice";
import { DeepPartial } from "@reduxjs/toolkit";
import { LoginSchema } from "../types/loginSchema";

describe('LoginSlice.test', () => {
    test('test set Username', () => {
        const state: DeepPartial<LoginSchema> = { username: '123'};
        expect(loginReducer(
            state as LoginSchema,
            loginActions.setUsername('123')
        )).toEqual({ username: '123' });
    })

    test('test set Password', () => {
        const state: DeepPartial<LoginSchema> = { password: '123'};
        expect(loginReducer(
            state as LoginSchema,
            loginActions.setPassword('123132')
        )).toEqual({ username: '123132' });
    })
})