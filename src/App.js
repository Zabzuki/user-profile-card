import React, { useEffect, useState } from "react";
import { Box, makeStyles, Container, ThemeProvider } from "@material-ui/core";
import UserCardManager from "./UserCardManager";
import { SLIDE_INFO } from "./constants";
//import classes from "*.module.css";

const useStyles = makeStyles(() => ({
  app: {
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export default function App(props) {
  //const { backgroundColor, title } = props.content;
  const [index, setIndex] = useState(0);
  const content = SLIDE_INFO[3];
  const classes = useStyles();
  //const content = SLIDE_INFO[index];

  return (
    <Container maxWidth="lg">
      <Box my={4} className={classes.app}>
        <UserCardManager content={{ title: "Slide 1" }} content={content} />
      </Box>
    </Container>
  );
}
