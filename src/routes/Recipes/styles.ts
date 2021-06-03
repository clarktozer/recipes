import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(theme => ({
    recipes: {
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),
        [theme.breakpoints.up("sm")]: {
            paddingTop: theme.spacing(4),
            paddingBottom: theme.spacing(4)
        }
    }
}));
