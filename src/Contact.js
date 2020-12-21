// Dependencies
import React, { useState } from "react";
import emailjs from "emailjs-com";

// MUI
import { Input, Container } from "@material-ui/core";

// My Components
import Breaker from "./components/BreakerTitle";

export default function Contact() {
  const [contact, setContact] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    address_1: "",
    address_2: "",
    zip: "",
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
          console.log(result.text);
          setContact({
            first_name: "",
            last_name: "",
            email: "",
            phone: "",
            address_1: "",
            address_2: "",
            zip: "",
            comments: "",
          });
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  console.log(process.env.REACT_APP_EMAIL_USER_ID);
  console.log(process.env.REACT_APP_EMAIL_SERVICE_ID);
  console.log(process.env.REACT_APP_EMAIL_TEMPLATE_ID);

  return (
    <Container>
      <Breaker title={"Contact"} />
      <form className="contact-us" onSubmit={sendEmail}>
        <label htmlFor="first">First Name</label>
        <input
          type="text"
          value={contact.first_name}
          id="first"
          name="firstName"
          onChange={(e) =>
            setContact({ ...contact, first_name: e.target.value })
          }
        />
        <label htmlFor="last">Last Name</label>
        <input
          type="text"
          value={contact.last_name}
          id="last"
          name="lastName"
          onChange={(e) =>
            setContact({ ...contact, last_name: e.target.value })
          }
        />
        <label htmlFor="phone">Phone</label>
        <input
          type="text"
          value={contact.phone}
          id="phone"
          name="phone"
          onChange={(e) => setContact({ ...contact, phone: e.target.value })}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          value={contact.email}
          id="email"
          name="email"
          onChange={(e) => setContact({ ...contact, email: e.target.value })}
        />
        <label htmlFor="address1">Address 1</label>
        <input
          type="text"
          value={contact.address_1}
          id="address1"
          name="address1"
          onChange={(e) =>
            setContact({ ...contact, address_1: e.target.value })
          }
        />
        <label htmlFor="address2">Address 2</label>
        <input
          type="text"
          value={contact.address_2}
          id="address2"
          name="address2"
          onChange={(e) =>
            setContact({ ...contact, address_2: e.target.value })
          }
        />
        <label htmlFor="zip">Zip</label>
        <input
          type="text"
          value={contact.zip}
          id="zip"
          name="zip"
          onChange={(e) => setContact({ ...contact, zip: e.target.value })}
        />
        <label htmlFor="comments">Comments</label>
        <textarea
          type="text"
          value={contact.comments}
          id="comments"
          name="comments"
          onChange={(e) => setContact({ ...contact, comments: e.target.value })}
        />
        <button type="submit">Submit</button>
      </form>
    </Container>
  );
}
