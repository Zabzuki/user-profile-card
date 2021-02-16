import React from "react";
import {
  makeStyles,
  Card,
  CardContent,
  CardMedia,
  Avatar,
  Typography,
} from "@material-ui/core";
import PhoneIcon from "@material-ui/icons/Phone";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import LocationOnIcon from "@material-ui/icons/LocationOn";

const useStyles = makeStyles((theme) => ({
  text: {
    margin: theme.spacing(0, 0, 0.5),
  },
  avatar: {
    verticalAlign: "middle",
    marginRight: theme.spacing(1),
  },
  large: {
    width: theme.spacing(12),
    height: theme.spacing(12),
    margin: theme.spacing(2, 2, 0),
  },
  card: {
    borderRadius: 15,
  },
  cardContent: {
    padding: theme.spacing(2, 2, 0, 2),
  },
}));

export default function ProTip() {
  const classes = useStyles();
  return (
    <div align="center">
      <Card
        variant="outlined"
        className={classes.card}
        style={{ display: "inline-block" }}
      >
        <CardMedia align="center">
          <Avatar
            alt="Remy Sharp"
            src="/static/images/avatar/1.jpg"
            className={classes.large}
          />
        </CardMedia>
        <CardContent className={classes.cardContent}>
          <Typography
            className={classes.text}
            color="textSecondary"
            variant="h6"
            align="center"
          >
            firstName lastName
          </Typography>
          <Typography
            className={classes.text}
            color="textSecondary"
            variant="subtitle1"
            align="center"
          >
            <AlternateEmailIcon className={classes.avatar} fontSize="small" />
            example@example.com
          </Typography>{" "}
          <Typography
            className={classes.text}
            color="textSecondary"
            variant="subtitle1"
            align="center"
          >
            <PhoneIcon className={classes.avatar} fontSize="small" />
            +306999999999
          </Typography>{" "}
          <Typography
            className={classes.text}
            color="textSecondary"
            variant="subtitle1"
            align="center"
          >
            <LocationOnIcon className={classes.avatar} fontSize="small" />
            Florina, Greece
          </Typography>{" "}
        </CardContent>
      </Card>
    </div>
  );
}
