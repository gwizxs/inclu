/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/display-name */
import { DeepPartial } from "@reduxjs/toolkit";
import { StateSchema, StoreProvider } from "app/providers/StoreProvider";

export const StoreDecorator = (state: DeepPartial<StateSchema>) => (StoryCom: any) => {

    return (
        <StoreProvider initialState={state}>
            <StoryCom />
        </StoreProvider>
    );
};
;

