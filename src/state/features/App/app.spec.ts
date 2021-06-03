import { Store } from "../../store";
import { appActions } from "./slice";

it("toggle favourited", () => {
    const beforeRecipe = Store.getState().app.recipes[0];
    expect(beforeRecipe.isFavourited).toBeFalsy();

    Store.dispatch(appActions.toggleFavourited(beforeRecipe.contentId));
    const afterRecipe = Store.getState().app.recipes[0];
    expect(afterRecipe.isFavourited).toBeTruthy();
});
