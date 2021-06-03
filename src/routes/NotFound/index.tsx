import { Icon, Typography } from "@material-ui/core";
import React, { FC } from "react";
import { useStyles } from "./styles";

export const NotFound: FC = () => {
    const classes = useStyles();

    return (
        <div className={classes.notFound}>
            <div className={classes.textCenter}>
                <Icon color="inherit">error</Icon>
                <Typography className={classes.marginTop2}>
                    Uh oh, this page does not exist!
                </Typography>
            </div>
        </div>
    );
};
