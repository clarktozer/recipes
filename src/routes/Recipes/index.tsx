import { Container, Grid, Typography } from "@material-ui/core";
import React, { FC } from "react";
import { useSelector } from "react-redux";
import { appSelectors } from "../../state";
import { RecipeCard } from "./components";
import { useStyles } from "./styles";

export const Recipes: FC = () => {
    const classes = useStyles();
    const recipes = useSelector(appSelectors.getRecipes);

    return (
        <Container className={classes.recipes}>
            <Typography variant="h4" gutterBottom>
                Recipes
            </Typography>
            <Grid container spacing={2}>
                {recipes.map(recipe => (
                    <Grid key={recipe.contentId} item xs={12} sm={6} md={4}>
                        <RecipeCard {...recipe} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};
