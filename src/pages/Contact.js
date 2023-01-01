import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../App.css'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_yt6zgks', 'template_ae8hah7', form.current, 'x3szdJaw8hL7UVWKJ')
      .then((result) => {
          console.log("I'm excited to see what we can build together!");
          e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
}
export default Contact;
