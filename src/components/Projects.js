import React, { useEffect, useRef, useContext } from 'react';
import LanguageContext from '../context/LanguageContext';
import './Projects.scss';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Element } from 'react-scroll';
import Homely from '../projects/homely.mp4';
import DartChat from '../projects/dartchat.mp4';
import RealWeather from '../projects/realweather.mp4';
import Tetsuya from '../projects/tetsuyaizakaya.mp4';
import TheSoleStore from '../projects/thesolestore.mp4';
const Projects = () => {

  gsap.registerPlugin(ScrollTrigger);

  const languageContext = useContext(LanguageContext);

  const projectRefs = useRef([]);
  projectRefs.current = [];

  const overViewLi = useRef([]);
  overViewLi.current = [];

  const addProjectRef = el => {
    if (el && !projectRefs.current.includes(el)) {
        projectRefs.current.push(el);
    }
  };

  const addOverViewLi = el => {
    if (el && !overViewLi.current.includes(el)) {
        overViewLi.current.push(el);
    }
  }
  
  useEffect(() => {
    gsap.from(".projectsHeaderText span", {
      scrollTrigger: {
        trigger: '.projectsHeaderText',
        start: 'top center+=100',
        end: 'bottom center-=100',
        scrub: true
      },
      height: 0,
      skewY: 7
    })

    projectRefs.current.forEach((el, index) => {
      gsap.fromTo(el, 
        {
          autoAlpha: 0
        },
        {
          autoAlpha: 1,
          ease: 'expo.out',
          scrollTrigger: {
              id: `section-${index+1}`,
              trigger: el,
              start: 'top center+=100',
              end: 'center-=150 center',
              // scrub: true,
              toggleActions: 'play none none reverse'
          },
          duration: 1
        }
      );
    });

      overViewLi.current.forEach((el, index) => {
        gsap.fromTo(el, 
          {
            autoAlpha: 0
          },
          {
            autoAlpha: 1,
            ease: 'expo.inOut',
            scrollTrigger: {
                id: `li-${index}`,
                trigger: el,
                start: 'top center+=100',
                end: 'bottom center+=175',
                scrub: true,
                toggleActions: 'play none none reverse'
            },
            duration: 1
          }
        );
      });

  }, []);

  return (
    <Element id="projects" name="projects">
    <section className="Projects">
      <h1 className="projectsHeader">
        <div className="projectsHeaderText">
          <span>
            {languageContext.language === 'english' ?
              'My Projects'
              :
              'プロジェクト'
            }
          </span>
        </div>
      </h1>
      <div className="projectsDiv">
        <div className="project" ref={addProjectRef} id="project-0">
          <div className="video">
            <h1>TheSoleStore</h1>
            <video autoPlay loop muted playsInline src={TheSoleStore} />
            <div className="projectLinks">
              <a href="https://thesolestore.herokuapp.com/" rel="noopener noreferrer" target="_blank">
                <button>Visit Website</button>
              </a>
              <a href="https://github.com/WageeshArya/TheSoleStore" rel="noopener noreferrer" target="_blank">
                <button className="githubBtn">Github</button>
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
                <li>Redux</li>
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
                  <li>Created RESTful API</li>
                  <li>Full CRUD functionality</li>
                  <li>User Signup and Login</li>
                  <li>Cart functionality</li>
                  <li>Redux</li>
                  <li>Admin dashboard</li>
                  <li>Amazon Web Services for image hosting</li>
                  <li>Fully responsive</li>
                </ul>
              </div>
          </div>
          <div className="description">
            <p>A MERN (MongoDB, ExpressJS, React/Redux, Node) stack shoe store with custom created RESTful API. CRUD operations available for product information in admin dashboard. User and admin passwords are encrypted on the backend. Images uploaded are stored using AWS. Cart and previous orders management functionality available to users.</p>
          </div>
          </div>
        </div>
        <div className="project" ref={addProjectRef} id="project-1">
          <div className="video">
            <h1>REALWeather</h1>
            <video autoPlay loop muted playsInline src={RealWeather} />
            <div className="projectLinks">
              <a href="https://nostalgic-volhard-d31503.netlify.app/" rel="noopener noreferrer" target="_blank">
                <button>Visit Website</button>
              </a>
              <a href="https://github.com/WageeshArya/REALWeather" rel="noopener noreferrer" target="_blank">
                <button className="githubBtn">Github</button>
              </a>
            </div>
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
                  <li>Used third party API</li>
                  <li>Used Axios to fetch data</li>
                  <li>3 types of inputs</li>
                  <li>Error handling</li>
                  <li>Fully responsive</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="description">
                <p>
                  A Single Page React application using a weather API from
                  <a href="http://openweathermap.org/" rel="noopener noreferrer" target="_blank"> openweather.org</a>
                  , using React Context and Axios to fetch data for 3 input options available.
                </p>
              </div>
        </div>
        <div className="project" ref={addProjectRef} id="project-2">
          <div className="video">
            <h1>DartChat</h1>
              <video autoPlay loop muted playsInline src={DartChat} />
              <div className="projectLinks">
                <a href="https://focused-villani-85fb7f.netlify.app/" rel="noopener noreferrer" target="_blank">
                  <button>Visit Website</button>
                </a>
              <a href="https://github.com/WageeshArya/DartChat" rel="noopener noreferrer" target="_blank">
                <button className="githubBtn">Github</button>
              </a>
            </div>
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
                    <li>SASS</li>
                    <li>React</li>
                    <li>React Context</li>
                    <li>Firebase Storage</li>
                    <li>Firebase Authentication</li>
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
                  <li>Real-time messaging without reloading</li>
                  <li>User signup and login functionality</li>
                  <li>Message time-stamping</li>
                  <li>Firebase storage</li>
                  <li>Firebase authentication</li>
                  <li>Fully responsive</li>
                </ul>
              </div>
              </div>
              <div className="description">
                <p>A real-time instant-messaging application using Firebase storage. User signup and authentication using Firebase authentication. </p>
              </div>
            </div>
        </div>
        <div className="project" ref={addProjectRef} id="project-3">
          <div className="video">
            <h1>Homely.</h1>
            <video autoPlay loop muted playsInline src={Homely} />
            <div className="projectLinks">
              <a href="https://musing-spence-f30ea9.netlify.app/" rel="noopener noreferrer" target="_blank">
                <button>Visit Website</button>
              </a>
              <a href="https://github.com/WageeshArya/Homely." rel="noopener noreferrer" target="_blank">
                <button className="githubBtn">Github</button>
              </a>
            </div>
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
                  <li>SASS</li>
                  <li>React</li>
                  <li>GSAP Animations</li>
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
                  <li>Website reveal animation</li>
                  <li>Page transition animation</li>
                  <li>Reveal animations on scroll</li>
                  <li>Homes and quotes scroller</li>
                  <li>Fully responsive</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="description">
            <p>Website for Homely., a fictitious real estate company using React, Sass and Greensock GSAP Animations. Animations created for landing page reveal and page transition. Animations created to reveal elements on scroll. Scroller implemented for homes and testimonials.</p>
          </div>
        </div>
        <div className="project" ref={addProjectRef} id="project-4">
          <div className="video">
            <h1>Tetsuya Izakaya</h1>
            <video autoPlay loop muted playsInline src={Tetsuya} />
            <div className="projectLinks">
              <a href="https://wizardly-meninsky-c34418.netlify.app/" rel="noopener noreferrer" target="_blank">
                <button>Visit Website</button>
              </a>
              <a href="https://github.com/WageeshArya/Tetsuya-Izakaya" rel="noopener noreferrer" target="_blank">
                <button className="githubBtn">Github</button>
              </a>
            </div>
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
                  <li>HTML</li>
                  <li>Javascript</li>
                  <li>CSS</li>
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
                  <li>Javascript gallery slider</li>
                  <li>Menu CSS Animations</li>
                  <li>Fully Responsive</li>
                </ul>
              </div>              
            </div>
          </div>
          <div className="description">
            <p>
              A website for Tetsuya Izakaya, a fictitious Japanese restaurant using HTML, CSS and Javascript. Menu animations created using CSS and image gallery slider created using Javascript.
            </p>
          </div>
        </div>
        <div className="projectEnd">
          <h1>
            {languageContext.language === 'english' ?
              'Projects Overview'
              :
              'プロジェクト概要'
            }
          </h1>
          <ul>
            <li ref={addOverViewLi} id="li-0">
              {languageContext.language === 'english' ?
                'Fully Responsive'
                :
                'レスポンシブ。'
              }
            </li>
            <li ref={addOverViewLi} id="li-1">
            {languageContext.language === 'english' ?
              'Efficient Code.'
              :
              '効率的なコード。'
            }
            </li>
            <li ref={addOverViewLi} id="li-2">
            {languageContext.language === 'english' ?
              'Fast Loading Times.'
              :
              '短いロードの時間。'
            }
            </li>
            <li ref={addOverViewLi} id="li-3">
            {languageContext.language === 'english' ?
              'Intuitive UI.'
              :
              '直感的なUI。'
            }
            </li>
            <li ref={addOverViewLi} id="li-4">
              {languageContext.language === 'english' ?
                'Good UX.'
                :
                '簡単なUX。'
              }
            </li>
          </ul>
        </div>
      </div>
    </section>
    </Element>
  )
}

export default Projects;