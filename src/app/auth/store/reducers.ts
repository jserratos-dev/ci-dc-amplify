import { createFeature, createReducer, on } from "@ngrx/store";
import { AuthStatateInterface } from "../types/authState.interface";
import { register } from "./action";


const initialState: AuthStatateInterface = { isSubmitting: false }

const authFeature = createFeature({
    name: 'auth',
    reducer: createReducer(
        initialState,
        on(register, (state) => ({...state, isSubmitting: true}))
    ),
});

export const { name: authFeatureKey, reducer: authReducer } = authFeature;