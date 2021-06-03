import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { RootReducer } from "./reducer";

const getMiddlewares = () => {
    const middlewares = getDefaultMiddleware({ thunk: false });

    if (process.env.NODE_ENV !== "production") {
        middlewares.push(logger);
    }

    return middlewares;
};

export const Store = configureStore({
    reducer: RootReducer,
    middleware: getMiddlewares()
});
