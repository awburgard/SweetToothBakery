import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  title: {
    width: "100%",
    display: "table",
    margin: "0 0 25",
    "& span": {
      display: "table-cell",
      verticalAlign: "middle",
      width: "50%",
    },
    "& p": {
      borderTop: "2px dotted #2cc1c0",
      display: "block",
      margin: 0,
      fontSize: 17,
      lineHeight: 29,
    },
    "& h2": {
      color: "#fe7095",
      whiteSpace: "nowrap",
      display: "table-cell",
      margin: 0,
      padding: 30,
    },
  },
}));

export default function Breaker({ title }) {
  const classes = useStyles();
  return (
    <div className={classes.title}>
      <span>
        <p></p>
      </span>
      <Typography variant="h2">{title}</Typography>
      <span>
        <p></p>
      </span>
    </div>
  );
}
