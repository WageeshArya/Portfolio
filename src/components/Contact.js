import React, { useContext, useState } from 'react';
import emailjs from 'emailjs-com';
import { init } from 'emailjs-com';
import './Contact.scss';
import LanguageContext from '../context/LanguageContext';
import Lottie from 'react-lottie';
import { Element } from 'react-scroll';
import SendLottie from '../lottie/send.json';
const Contact = () => {

  const languageContext = useContext(LanguageContext);
  init("user_RRtlFpykyrvvahmEKEqox");

  
  const [emailSent, setEmailSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('gmail',
      'template_w2tvl4a',
      e.target,
      'user_RRtlFpykyrvvahmEKEqox')
      .then((result) => {
        setEmailSent(true);
        setTimeout(() => {
          setEmailSent(false);
        },2000);
      }, (error) => {
          console.log(error.text);
      });
    e.target.reset();
  }

  return (
    <Element id="contact" name="contact">
    <section className="contactMe">
      <div className="contactDiv">
        <div className={emailSent ? "emailSent" : "hide"}>
          <p>Email Sent!</p>
        </div>
        <div className="contactHeader">
          <h1>
          {languageContext.language === 'english' ?
              'Contact Me'
              :
              '連絡して'
            }
          </h1>
        </div>
        <div className="contactGrid">
          <form onSubmit={sendEmail}>
            <div className="contactInput">
              <label htmlFor="name">
                {languageContext.language === 'english' ?
                  'Name'
                  :
                  '名前'
                }
              </label>
                <input type="text" id="name" name="name" />
            </div>
            <div className="contactInput">
              <label htmlFor="email">
                {languageContext.language === 'english' ?
                  'Email'
                  :
                  'メール'
                }
              </label>
                <input type="email" id="email" name="email" required />
            </div>
            <div className="contactInput">
              <label htmlFor="message">
              {languageContext.language === 'english' ?
                  'Message'
                  :
                  'メッセージ'
                }
              </label>
                <input type="textbox" id="message" name="message" required />  
            </div>
            <div className="contactSend">
              <input type="submit" value={
              languageContext.language === 'english' ?
                'Send'
                :
                '送る'
              }/>
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
