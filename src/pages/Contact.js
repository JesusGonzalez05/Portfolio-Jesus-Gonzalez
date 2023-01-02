import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Astronaut from '../components/Astronaut.png'
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
    <div className='contact-page'>
      <img className='' src = {Astronaut} alt="Jesus' avatar as an astronaut"></img>

      <div className='form-container'>
        <form className="form" ref={form} onSubmit={sendEmail}>
          <label className='label-1'>Name:</label>
          <input type="text" name="user_name" />
          <label className='label-1'>Email:</label>
          <input type="email" name="user_email" />
          <label className='label-2'>Message:</label>
          <textarea name="message" />
          <input className="email-btn" type="submit" value="Send" />
        </form>
      </div>
    </div>
  );
}
export default Contact;
