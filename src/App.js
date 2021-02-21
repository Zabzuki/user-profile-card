import React from "react";
import { Box, makeStyles, Container, ThemeProvider } from "@material-ui/core";
import UserCardManager from "./UserCardManager";

const useStyles = makeStyles(() => ({
  app: {
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export default function App(props) {
  const classes = useStyles();

  return (
    <Container maxWidth="lg">
      <Box my={4} className={classes.app}>
        <UserCardManager />
      </Box>
    </Container>
  );
}
