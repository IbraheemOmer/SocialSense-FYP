import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import NavBar from "../navbar/NavBar";
import "./contact.css";

export default function Contact() {
  return (
    <div>
      <NavBar />
      <Heading />
      <MessageForm />
    </div>
  );
}

function Heading() {
  return (
    <div className="heading-contact">
      <h1>Get in Touch</h1>
    </div>
  );
}

function MessageForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_tnr92ox",
        "template_4ow6v9l",
        form.current,
        "h4wgewFuBSn0kcKBN"
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    form.current.reset();
  };

  return (
    <div className="main-form">
      <form ref={form} className="contact-form" onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Subject</label>
        <input type="text" name="subject" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" className="button" />
      </form>
    </div>
  );
}
