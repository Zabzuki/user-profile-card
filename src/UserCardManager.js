import React, { useEffect, useState } from "react";
import {
  Typography,
  Paper,
  makeStyles,
  Grid,
  Hidden,
  Box,
} from "@material-ui/core";
import { SLIDE_INFO } from "./constants";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import UserCard from "./UserCard";
import CircularProgress from "@material-ui/core/CircularProgress";

function Arrow(props) {
  const { direction, clickFunction } = props;
  const icon =
    direction === "left" ? <ArrowBackIosIcon /> : <ArrowForwardIosIcon />;

  return <div onClick={clickFunction}>{icon}</div>;
}

export default function UserCardManager(props) {
  //const UserCardManager = () => {
  const [users, setUsers] = useState("");
  const [index, setIndex] = useState(0);
  //const content = SLIDE_INFO[index];
  const numSlides = SLIDE_INFO.length;

  const onArrowClick = (direction) => {
    const increment = direction === "left" ? -1 : 1;
    const newIndex = (index + increment + numSlides) % numSlides;
    setIndex(newIndex);
  };

  useEffect(() => {
    fetch("https://randomuser.me/api?results=100")
      .then((res) => res.json())
      .then((body) => {
        console.log(body);
        setUsers(body.results);
      });
    //};
  }, []);

  const useStyles = makeStyles(() => ({
    paper: {
      display: "flex",
      width: "auto",
    },
    grid: {
      width: "auto",
    },
    // arrow: {
    //   padding: "5px",
    // },
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
            <Grid item xs={12}>
              <Typography
                variant="h4"
                component="h1"
                gutterBottom
                align="center"
              >
                User Card{" "}
              </Typography>
            </Grid>
            <Box display="flex" alignItems="center">
              <Grid item xs="auto">
                <Arrow
                  className="arrow"
                  direction="left"
                  clickFunction={() => onArrowClick("left")}
                />
              </Grid>
              <Grid item>
                <Grid
                  container
                  spacing={2}
                  className={classes.grid}
                  alignItems="center"
                  justify="center"
                >
                  <Grid item xs="auto">
                    <UserCard
                      content={{ title: "Slide 1" }}
                      content={users[index]}
                    />
                  </Grid>
                  <Hidden xsDown>
                    <Grid item xs="auto">
                      <UserCard
                        content={{ title: "Slide 1" }}
                        content={users[index + 1]}
                      />
                    </Grid>
                  </Hidden>
                  <Hidden smDown>
                    <Grid item xs="auto">
                      <UserCard
                        content={{ title: "Slide 1" }}
                        content={users[index + 2]}
                      />
                    </Grid>
                  </Hidden>
                </Grid>
              </Grid>
              <Grid item xs="auto">
                <Arrow
                  className="arrow"
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

//export default UserCardManager();
