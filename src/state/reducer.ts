import { combineReducers } from "@reduxjs/toolkit";
import { appReducer } from "./features";

export const RootReducer = combineReducers({
    app: appReducer
});

export type RootState = ReturnType<typeof RootReducer>;
