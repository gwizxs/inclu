import { bindActionCreators, CreateSliceOptions, SliceCaseReducers, createSlice } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { useMemo } from "react";

export function buildSlice<
    State,
    CaseReducers extends SliceCaseReducers<State>,
    Name extends string = string
>(options: CreateSliceOptions<State, CaseReducers, Name>) {
    const slice = createSlice(options)

    const useActions = () => {
        const dispatch = useDispatch()
        /*
         * возвращает typeof slice.actions
         * и принимает dispatch
         */
        return useMemo(() => {
            // @ts-ignore
            return bindActionCreators(slice.actions, dispatch)
        }, [dispatch])
    }

    return {
        ...slice,
        useActions,
    }


}