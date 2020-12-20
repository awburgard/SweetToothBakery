import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  header: {
    margin: "0 0 20px",
    width: "100%",
    display: "table",
    "& span": {
      display: "table-cell",
      verticalAlign: "middle",
      width: "50%",
      borderTop: "2px dotted #2cc1c0",
      margin: 0,
    },
  },
  title: {
    margin: 0,
    display: "table-cell",
    padding: "0 25px",
  },
}));

export default function About() {
  const classes = useStyles();
  return (
    <div className={classes.header}>
      <span />
      <Typography className={classes.title} variant="h2">
        About
      </Typography>
      <span />
    </div>
  );
}
