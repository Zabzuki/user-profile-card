import React, { useContext, useEffect } from "react";
import { TextField, makeStyles, Box } from "@material-ui/core";
import { ThemeContext } from "./ThemeProvider";

export default function ColorPicker() {
  const setBackgroundColor = useContext(ThemeContext);

  const useStyles = makeStyles((theme) => ({
    box: {
      padding: theme.spacing(3),
    },
  }));
  const classes = useStyles();

  return (
    <Box className={classes.box}>
      <TextField
        placeholder="Enter color"
        variant="outlined"
        onChange={(event) => {
          setBackgroundColor(event.target.value);
        }}
      />
    </Box>
  );
}
