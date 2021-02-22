import { TextField, makeStyles, Box } from "@material-ui/core";
import React from "react";
import useLocalStorage from "react-use-localstorage";

export default function ColorPicker() {
  const [color, setColor] = useLocalStorage("color");

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
        onChange={setColor}
      />
    </Box>
  );
}
