import { Grid, Container } from "@material-ui/core";

export default function MainLanding() {
  return (
    <Container>
      <Grid justify="space-between">
        <Grid item xs="4">
          Welcome to Sweet Tooth Bakery
        </Grid>
        <Grid item xs="4">
          Home of Dr. Morgan Burgard
        </Grid>
      </Grid>
    </Container>
  );
}
