// Dependencies
import React, { useState } from "react";
import emailjs from "emailjs-com";

// MUI
import { Container, TextField, Button, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

// My Components
import Breaker from "./components/BreakerTitle";

const useStyles = makeStyles({
  text: {
    color: "white",
  },
});

export default function Contact() {
  const classes = useStyles();
  const [contact, setContact] = useState({
    first_name: "",
    last_name: "",
    email: "",
    comments: "",
  });

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAIL_SERVICE_ID,
        process.env.REACT_APP_EMAIL_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_EMAIL_USER_ID
      )
      .then(
        (result) => {
          setContact({
            first_name: "",
            last_name: "",
            email: "",
            comments: "",
          });
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <Container>
      <Breaker title={"Contact"} />
      <form onSubmit={sendEmail}>
        <Grid container spacing={3} justify="center" alignItems="center">
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="First Name"
              variant="outlined"
              type="text"
              value={contact.first_name}
              id="first"
              name="firstName"
              onChange={(e) =>
                setContact({ ...contact, first_name: e.target.value })
              }
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Last Name"
              variant="outlined"
              type="text"
              value={contact.last_name}
              id="last"
              name="lastName"
              onChange={(e) =>
                setContact({ ...contact, last_name: e.target.value })
              }
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              type="email"
              value={contact.email}
              id="email"
              name="email"
              onChange={(e) =>
                setContact({ ...contact, email: e.target.value })
              }
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Comments"
              variant="outlined"
              multiline
              rows={4}
              type="text"
              value={contact.comments}
              id="comments"
              name="comments"
              onChange={(e) =>
                setContact({ ...contact, comments: e.target.value })
              }
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              color="secondary"
              className={classes.text}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}
