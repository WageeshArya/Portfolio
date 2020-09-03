import React from 'react';
import './Contact.scss';
const Contact = () => {
  return (
    <section className="contactMe">
      <div className="formDiv">
        <div className="contactHeader">
          <h1>Contact Me</h1>
        </div>
        <form className="contactForm">
          <div className="contactInput">
            <label htmlFor="name">Name</label>
              <input type="text" id="name" />
          </div>
          <div className="contactInput">
            <label htmlFor="email">Email</label>
              <input type="email" id="email" />
          </div>
          <div className="contactInput">
            <label htmlFor="message">Message</label>
              <input type="textbox" id="message" />  
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact;
