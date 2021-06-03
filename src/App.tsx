import { CssBaseline, ThemeProvider } from "@material-ui/core";
import React, { FC } from "react";
import { Routes } from "./routes";
import { LightTheme } from "./theme";

export const App: FC = () => (
    <ThemeProvider theme={LightTheme}>
        <CssBaseline />
        <Routes />
    </ThemeProvider>
);
