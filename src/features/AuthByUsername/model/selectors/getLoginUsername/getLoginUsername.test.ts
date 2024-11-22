import { DeepPartial } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";
import { getLoginUsername } from "./getLoginUsername";


describe('getLoginLoading.test', () => {
    test('should return username', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: { username: 'user' },
        };
        expect(getLoginUsername(state as StateSchema)).toEqual('user');
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginUsername(state as StateSchema)).toEqual('');
    });
});