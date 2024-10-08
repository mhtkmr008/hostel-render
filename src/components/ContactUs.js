import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/ContactUs.css';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_h6tufk4', 'template_p6k3jnf', form.current, {publicKey: 'rdPjlhFDSygni0Jwo',})
      .then(
        () => {
          alert('SUCCESS!');
          form.current.reset();
        },
        (error) => {
          alert('FAILED...', error.text);
        },
      );
  };

  return (
    <div className='contact-container'>
        <div className="contact-row message-row"><h1>You can mail us your query!!!</h1></div>
    <div className="row form-row">
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
    </div>
    </div>
    
  );
};