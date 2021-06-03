import React, { FC } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { NotFound } from "./NotFound";
import { Recipes } from "./Recipes";

export const Routes: FC = () => (
    <Switch>
        <Route exact path="/">
            <Redirect to="/recipes" />
        </Route>
        <Route exact path="/recipes">
            <Recipes />
        </Route>
        <Route component={NotFound} />
    </Switch>
);
