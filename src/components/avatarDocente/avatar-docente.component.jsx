import React from "react";
import { BigAvatar, Wrap } from "./avatar-docente.styles";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1)
    }
  },
  bigAvatar: {
    width: 60,
    height: 60
  }
}));

export default function AvatarDocente() {
  const classes = useStyles();
  return (
    <Wrap>
      <BigAvatar
        alt="Remy Sharp"
        src="https://material-ui.com/static/images/avatar/1.jpg"
        className={classes.bigAvatar}
      />
    </Wrap>
  );
}
