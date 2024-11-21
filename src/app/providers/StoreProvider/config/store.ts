import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/Counter';
import { StateSchema } from './StateSchema';
import { UserReducer } from 'entities/User';
import { createReducerManager } from './reduceManager';

export function createReduxStore(initialState?: StateSchema) {

    const rootReducer: ReducersMapObject<StateSchema> = {
        counter: counterReducer,
        user: UserReducer,
    }

    const reduceManager = createReducerManager(rootReducer)

    const store = configureStore<StateSchema>({
        reducer: rootReducer,
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });
    // @ts-ignore
    store.reduceManager = reduceManager

    return store
}

