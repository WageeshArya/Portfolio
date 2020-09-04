import React from 'react';
import './Contact.scss';
import Lottie from 'react-lottie';
import { Element } from 'react-scroll';
import SendLottie from '../lottie/send.json';
const Contact = () => {
  return (
    <Element id="contact" name="contact">
    <section className="contactMe">
      <div className="contactDiv">
        <div className="contactHeader">
          <h1>Contact Me</h1>
        </div>
        <div className="contactGrid">
          <form>
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
            <div className="contactSend">
              <input type="submit"/>
            </div>
          </form>
          <div className="lottieSend">
            <Lottie options={
                {
                    loop: true,
                    autoplay: true,
                    animationData: SendLottie,
                    rendererSettings: {
                        preserveAspectRatio: "xMidYMid slice"
                    }
                }
              }/>
          </div>
        </div>
        
      </div>
    </section>
    </Element>
  )
}

export default Contact;
