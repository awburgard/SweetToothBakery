import { Grid, Typography, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    position: "relative",
    textAlign: "center",
  },
  centered: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: `translate(-50%, -59%)`,
  },
  background: {
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center -15px",
    backgroundAttachment: "scroll",
    backgroundSize: "cover",
    minHeight: 497,
    padding: 0,
    backgroundImage: `url(https://source.unsplash.com/rkT_TG5NKF8/1600x900)`,
  },
}));

export default function MainLanding() {
  const classes = useStyles();
  return (
    <Grid container id="home">
      <Grid item xs={12}>
        <Box className={classes.container}>
          <Box variant="section" className={classes.background}>
            <div className={classes.centered}>
              <Typography variant="h1">
                Sweet <br />
                Tooth <br />
                Bakery
              </Typography>
            </div>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
