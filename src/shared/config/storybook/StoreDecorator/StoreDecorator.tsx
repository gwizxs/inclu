/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/display-name */
import { DeepPartial, ReducersMapObject } from "@reduxjs/toolkit";
import { StateSchema, StoreProvider } from "app/providers/StoreProvider";
import { loginReducer } from "features/AuthByUsername/model/slice/LoginSlice";

const defaultAsyncReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
    loginForm: loginReducer
};
export const StoreDecorator = (state: DeepPartial<StateSchema>, asyncReducers?: ReducersMapObject<StateSchema>) => (StoryCom: any) => {

    return (
        <StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
            <StoryCom />
        </StoreProvider>
    );
};
;

