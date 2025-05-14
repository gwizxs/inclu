import {
    AnyAction, combineReducers, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { MountedReducers, ReducerManager, StateSchema, StateSchemaKey } from './StateSchema';

export function createReducerManager(initialReducers: ReducersMapObject<StateSchema>): ReducerManager {
    const reducers = { ...initialReducers };

    let combinedReducer = combineReducers(reducers);

    let keysToRemove: Array<StateSchemaKey> = [];

    const mountedReucers: MountedReducers = {};

    return {
        getReducerMap: () => reducers,
        getMountedReducers: () => mountedReucers,
        reduce: (state: StateSchema, action: AnyAction) => {
            if (keysToRemove.length > 0 && state) {
                state = { ...state };
                keysToRemove.forEach((key) => {
                    delete state[key];
                });
                keysToRemove = [];
            }
            
            // Приводим к типу RootState, который возвращает combineReducers
            type RootState = ReturnType<typeof combinedReducer>;
            // Затем обратно к StateSchema
            return combinedReducer(state as RootState, action) as unknown as StateSchema;
        },
        add: (key: StateSchemaKey, reducer: Reducer) => {
            if (!key || reducers[key]) {
                return;
            }
            reducers[key] = reducer;
            mountedReucers[key] = true;

            combinedReducer = combineReducers(reducers);
        },
        remove: (key: StateSchemaKey) => {
            if (!key || !reducers[key]) {
                return;
            }
            delete reducers[key];
            keysToRemove.push(key);
            mountedReucers[key] = false;
            combinedReducer = combineReducers(reducers);
        },
    };
}
