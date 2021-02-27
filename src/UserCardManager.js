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
import Error from "./Error";

function Arrow(props) {
  const { direction, clickFunction, disabled } = props;
  const icon =
    direction === "left" ? (
      <ArrowBackIosIcon color={disabled} />
    ) : (
      <ArrowForwardIosIcon />
    );

  return <Box onClick={clickFunction}>{icon}</Box>;
}

export default function UserCardManager() {
  const [users, setUsers] = useState([]);
  const [index, setIndex] = useState(0);
  const [error, setError] = useState(false);
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
        //console.log(body);
        setUsers((previousUsers) => {
          return [...previousUsers, ...body.results];
        });
      })
      .catch((error) => {
        setError(true);
        console.error(error);
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
    arrowRight: {
      padding: theme.spacing(0, 1.5, 0, 1),
    },
    arrowLeft: {
      padding: theme.spacing(0, 1, 0, 2),
    },
    box: {
      paddingBottom: theme.spacing(5),
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
            direction="row"
          >
            <Grid item xs={12}>
              <Typography
                variant="h4"
                component="h1"
                gutterBottom
                align="center"
              >
                User Card{" "}
              </Typography>
              <ColorPicker />
            </Grid>
            <Grid item xs={12}>
              <Grid
                container
                spacing={2}
                alignItems="center"
                justify="center"
                width="max-content"
                display="flex"
                direction="row"
              >
                <Box display="flex" alignItems="center" className={classes.box}>
                  <Grid item className={classes.arrowLeft}>
                    <Arrow
                      direction="left"
                      clickFunction={() => onArrowClick("left")}
                      disabled={index > 0 ? "" : "disabled"}
                    />
                  </Grid>
                  <Grid item width="auto">
                    <Grid
                      container
                      spacing={2}
                      className={classes.grid}
                      alignItems="center"
                      justify="center"
                      width="max-content"
                      display="flex"
                      direction="row"
                      wrap="nowrap"
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
                  <Grid item className={classes.arrowRight}>
                    <Arrow
                      direction="right"
                      clickFunction={() => onArrowClick("right")}
                    />
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        ) : setError ? (
          <Error />
        ) : (
          <CircularProgress data-testid="spinner" />
        )}
      </Paper>
    </React.Fragment>
  );
}
