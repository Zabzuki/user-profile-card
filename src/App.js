import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import UserCard from "./UserCard";
import Paper from "@material-ui/core/Paper";

export default function App() {
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Paper variant="outlined">
          <Typography variant="h4" component="h1" gutterBottom align="center">
            User Card{" "}
          </Typography>
          <UserCard />
        </Paper>
      </Box>
    </Container>
  );
}
