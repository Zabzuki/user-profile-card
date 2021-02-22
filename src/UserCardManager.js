import React, { useEffect, useState } from "react";
import {
  Typography,
  Paper,
  makeStyles,
  Grid,
  Hidden,
  Box,
} from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import UserCard from "./UserCard";
import CircularProgress from "@material-ui/core/CircularProgress";
import ColorPicker from "./ColorPicker";

function Arrow(props) {
  const { direction, clickFunction, disabled } = props;
  const icon =
    direction === "left" ? (
      <ArrowBackIosIcon color={disabled} />
    ) : (
      <ArrowForwardIosIcon />
    );

  return <div onClick={clickFunction}>{icon}</div>;
}

export default function UserCardManager() {
  const [users, setUsers] = useState([]);
  const [index, setIndex] = useState(0);
  const onArrowClick = (direction) => {
    const increment = direction === "left" ? -1 : 1;
    const numUsers = users.length;

    if (direction === "left" && index === 0) {
      return;
    }

    if (index >= numUsers - 4) {
      fetchUsers();
    }

    const newIndex = index != numUsers ? index + increment : index;
    setIndex(newIndex);
  };

  const fetchUsers = () => {
    fetch("https://randomuser.me/api?results=20")
      .then((res) => res.json())
      .then((body) => {
        console.log(body);
        setUsers((previousUsers) => {
          return [...previousUsers, ...body.results];
        });
      });
  };
  useEffect(() => {
    fetchUsers();
  }, []);

  const useStyles = makeStyles((theme) => ({
    paper: {
      display: "flex",
      width: "auto",
    },
    grid: {
      width: "auto",
    },
    arrow: {
      padding: theme.spacing(3),
    },
    box: {
      padding: theme.spacing(3),
    },
  }));
  const classes = useStyles();

  return (
    <React.Fragment>
      <Paper variant="outlined" className={classes.paper}>
        {users && users.length ? (
          <Grid
            container
            spacing={2}
            className={classes.grid}
            alignItems="center"
            justify="center"
          >
            {/* <Grid item xs={6}>
              <Typography
                variant="h4"
                component="h1"
                gutterBottom
                align="center"
              >
                User Card{" "}
              </Typography>
            </Grid> */}
            <Grid item>
              <ColorPicker />
            </Grid>
            <Box display="flex" alignItems="center" className={classes.box}>
              <Grid item xs="auto" className={classes.arrow}>
                {index > 0 ? (
                  <Arrow
                    direction="left"
                    clickFunction={() => onArrowClick("left")}
                  />
                ) : (
                  <Arrow
                    direction="left"
                    clickFunction={() => onArrowClick("left")}
                    disabled={"disabled"}
                  />
                )}
              </Grid>
              <Grid item>
                <Grid
                  container
                  spacing={2}
                  className={classes.grid}
                  alignItems="center"
                  justify="center"
                  //width="max-content"
                  //display="flex"
                  //direction="column"
                >
                  <Grid item xs="auto">
                    <UserCard content={users[index]} />
                  </Grid>
                  <Hidden xsDown>
                    <Grid item xs="auto">
                      <UserCard content={users[index + 1]} />
                    </Grid>
                  </Hidden>
                  <Hidden smDown>
                    <Grid item xs="auto">
                      <UserCard content={users[index + 2]} />
                    </Grid>
                  </Hidden>
                </Grid>
              </Grid>
              <Grid item xs="auto" className={classes.arrow}>
                <Arrow
                  direction="right"
                  clickFunction={() => onArrowClick("right")}
                />
              </Grid>
            </Box>
          </Grid>
        ) : (
          <CircularProgress />
        )}
      </Paper>
    </React.Fragment>
  );
}
