import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(theme => ({
    notFound: {
        flex: "auto",
        minHeight: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: theme.spacing(4)
    },
    textCenter: {
        textAlign: "center"
    },
    marginTop2: {
        marginTop: theme.spacing(2)
    },
    flexCenter: {
        display: "flex",
        alignItems: "center"
    }
}));
