import React from "react";
import { Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  text: {
    margin: theme.spacing(0, 0, 0.5),
    padding: theme.spacing(3),
  },
}));

export default function Error() {
  const classes = useStyles();

  return (
    <div>
      <Typography
        color="textSecondary"
        variant="subtitle1"
        align="center"
        className={classes.text}
        variant="h6"
      >
        An error occured. We cannot fetch the results
      </Typography>
    </div>
  );
}
