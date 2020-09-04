import React, { useContext } from 'react';
import './Contact.scss';
import LanguageContext from '../context/LanguageContext';
import Lottie from 'react-lottie';
import { Element } from 'react-scroll';
import SendLottie from '../lottie/send.json';
const Contact = () => {

  const languageContext = useContext(LanguageContext);

  return (
    <Element id="contact" name="contact">
    <section className="contactMe">
      <div className="contactDiv">
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
          <form>
            <div className="contactInput">
              <label htmlFor="name">
                {languageContext.language === 'english' ?
                  'Name'
                  :
                  '名前'
                }
              </label>
                <input type="text" id="name" />
            </div>
            <div className="contactInput">
              <label htmlFor="email">
                {languageContext.language === 'english' ?
                  'Email'
                  :
                  'メール'
                }
              </label>
                <input type="email" id="email" />
            </div>
            <div className="contactInput">
              <label htmlFor="message">
              {languageContext.language === 'english' ?
                  'Message'
                  :
                  'メッセージ'
                }
              </label>
                <input type="textbox" id="message" />  
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
