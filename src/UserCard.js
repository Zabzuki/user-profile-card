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
    maxWidth: "250px",
    minWidth: "250px",
    height: "300px",
  },
  cardContent: {
    padding: theme.spacing(2, 2, 0, 2),
  },
}));

export default function UserCard(props) {
  const classes = useStyles();

  return (
    <Card
      variant="outlined"
      className={classes.card}
      style={{ display: "inline-block" }}
    >
      <CardMedia align="center">
        <Avatar
          alt="Remy Sharp"
          src={props?.content?.picture?.large}
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
          {props?.content?.name?.first} {props?.content?.name?.last}
        </Typography>
        <Typography
          className={classes.text}
          color="textSecondary"
          variant="subtitle1"
          align="center"
        >
          <AlternateEmailIcon className={classes.avatar} fontSize="small" />
          {props?.content?.email}
        </Typography>{" "}
        <Typography
          className={classes.text}
          color="textSecondary"
          variant="subtitle1"
          align="center"
        >
          <PhoneIcon className={classes.avatar} fontSize="small" />
          {props?.content?.cell}
        </Typography>{" "}
        <Typography
          className={classes.text}
          color="textSecondary"
          variant="subtitle1"
          align="center"
        >
          <LocationOnIcon className={classes.avatar} fontSize="small" />
          {props?.content?.location?.city}, {props?.content?.location?.country}
        </Typography>{" "}
      </CardContent>
    </Card>
  );
}
