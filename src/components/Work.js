import React, { useContext, useEffect } from 'react'
import LanguageContext from '../context/LanguageContext';
import { Element } from 'react-scroll';
import gsap from 'gsap';
import WIP from '../projects/WIP.mp4';
import './Work.scss';
const Work = () => {

  const languageContext = useContext(LanguageContext);

  useEffect(() => {
    gsap.from(".work-h1 span", {
      scrollTrigger: {
        trigger: '.workHeader',
        start: 'top center+=100',
        end: 'bottom center-=100',
        scrub: true
      },
      height: 0,
      skewY: 7
    })
  })
  
  return (
    <Element id="work" name="work">
      <section className="Work">
        <div className="workHeader">
          <h1 className="work-h1">
            <span>
              {languageContext.language === 'english' ?
                'Work'
                :
                '仕事'
              }
            </span>
          </h1>
        </div>
        <div className="work">
            <div className="video">
              <h1>The Work In Progress (W.I.P.)</h1>
              <video autoPlay loop muted playsInline src={WIP} />
              <div className="projectLinks">
                <a href="http://thewip.in/" rel="noopener noreferrer" target="_blank">
                  <button>Visit Website</button>
                </a>
              </div>
              {/* <p className="warning">This project has a large load up time since Heroku hosting unloads the website from their server when the website has been inactive.</p> */}
            </div>
            <div className="projectDetails">
              <div className="projectDetailsGrid">
                <div className="technologies">
                <h3>
                {languageContext.language === 'english' ?
                  'Technologies used'
                  :
                  '使った技術'
                }
                </h3>
                <ul>
                  <li>JSX</li>
                  <li>Javascript</li>
                  <li>CSS</li>
                  <li>React</li>
                  <li>React Context</li>
                  <li>Fetch API</li>
                  <li>NodeJS</li>
                  <li>ExpressJS</li>
                  <li>MongoDB</li>
                  <li>Mongoose</li>
                  <li>Amazon Web Services</li>
                </ul>
              </div>
              <div className="features">
                  <h3>
                    {languageContext.language === 'english' ?
                      'Notable Features'
                      :
                      '長所'
                    }
                  </h3>
                  <ul>
                    <li>GSAP Animations</li>
                    <li>Created multiple RESTful APIs</li>
                    <li>Full CRUD functionality</li>
                    <li>Multiple Content Management Systems (CMSs)</li>
                    <li>Blog publishing capability and CMS</li>
                    <li>Amazon Web Services for image and video hosting</li>
                    <li>Fully responsive</li>
                  </ul>
                </div>
            </div>
            <div className="description">
              <p></p>
            </div>
            </div>
          </div>
      </section>
    </Element>
  )
}

export default Work;