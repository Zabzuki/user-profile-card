import React, { useState, useEffect } from "react";
import { TextField, makeStyles, Box } from "@material-ui/core";
import useLocalStorage from "react-use-localstorage";

export default function ColorPicker() {
  const [color, setColor] = useLocalStorage("color");

  const useStyles = makeStyles((theme) => ({
    box: {
      padding: theme.spacing(3),
    },
  }));
  const classes = useStyles();

  const setBackgroundColor = () => {
    console.log(color);
    document.body.style.setProperty("background-color", color);
  };

  useEffect(() => {
    setBackgroundColor();
  }, [color]);

  return (
    <Box className={classes.box}>
      <TextField
        placeholder="Enter color"
        variant="outlined"
        onChange={(event) => {
          console.log(event.target.value);
          setColor(event.target.value);
          setBackgroundColor();
        }}
      />
    </Box>
  );
}
