import { counterActions, counterReducer } from "./counterSlice";
import { StateSchema } from "app/providers/StoreProvider";
import { CounterSchema } from "../types/counterSchema";


describe('test counterReducer', () => {
    test('decrement', () => {
        const state: CounterSchema = { value: 10 }
        
        expect(
            counterReducer(state, counterActions.decrement())
        ).toEqual({ value: 9});
    });


    test('increment', () => {
        const state: CounterSchema = { value: 10 }
        
        expect(
            counterReducer(state, counterActions.increment())
        ).toEqual({ value: 11});
    });


    test('increment from empty state', () => {
        expect(
            counterReducer(undefined, counterActions.increment())
        ).toEqual({ value: 1 });
    });
});
