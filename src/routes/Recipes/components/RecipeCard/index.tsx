import {
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Icon,
    IconButton,
    Tooltip,
    Typography
} from "@material-ui/core";
import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { appActions, Recipe } from "../../../../state";

export const RecipeCard: FC<Recipe> = ({
    title,
    isFavourited,
    contentId,
    imageList
}) => {
    const dispatch = useDispatch();

    const onToggleFavourited = () => {
        dispatch(appActions.toggleFavourited(contentId));
    };

    return (
        <Card>
            <CardMedia
                component="img"
                alt={title}
                image={imageList.landscape32medium1x.url}
            />
            <CardContent>
                <Typography variant="h6" noWrap>
                    {title}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <Tooltip
                    title={
                        isFavourited
                            ? "Unfavourite this listing"
                            : "Favourite this listing"
                    }
                >
                    <IconButton onClick={onToggleFavourited}>
                        {isFavourited ? (
                            <Icon>favorite</Icon>
                        ) : (
                            <Icon>favorite_border</Icon>
                        )}
                    </IconButton>
                </Tooltip>
            </CardActions>
        </Card>
    );
};
