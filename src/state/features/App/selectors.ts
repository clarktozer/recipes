import { RootState } from "../../reducer";

export const appSelectors = {
    getRecipes: ({ app }: RootState) => app.recipes
};
