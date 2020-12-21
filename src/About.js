import React from "react";
import { Typography, Grid, Box, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import about from "./about.jpg";
import Breaker from "./components/BreakerTitle";

const useStyles = makeStyles((theme) => ({
  intro: {
    paddingBottom: 60,
    paddingLeft: 20,
  },
  image: {
    border: 0,
    maxWidth: "100%",
    verticalAlign: "middle",
    marginTop: 0,
  },
}));

export default function About() {
  const classes = useStyles();
  return (
    <Container>
      <Breaker title={"About"} />
      <Box className={classes.intro}>
        <Grid container spacing={2}>
          <Grid item md={6}>
            <img
              src={about}
              alt="morgan and austin wedding"
              className={classes.image}
            />
          </Grid>
          <Grid item md={6}>
            <Typography variant="h3" align="center">
              Welcome to My Bakery!
            </Typography>
            <Typography>
              I'm so glad you decided to stop by! Let me pour you some milk
              while you nibble on some delicous chocolate chip cookies and I'll
              introduce myself!
              <br />
              <br />
              My name is Morgan Burgard. I'm a dentist in the St. Louis area who
              has been baking since I was a little girl. My grandparents bought
              me my first mixer when I was 12 and its the one I still use! I'm
              married to my husband, Austin (He built this site!). I love baking
              and bringing joy to others. When I'm not baking, I enjoy being
              with my husband, playing board games with friends, traveling the
              world, and cheering on our favorite sports teams.
              <br />
              <br />
              Thank you for being here and helping me to bake the world into a
              better place!
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
