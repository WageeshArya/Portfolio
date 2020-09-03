import React from 'react';
import './Projects.scss';
import Homely from '../projects/homely.mp4';
import DartChat from '../projects/dartchat.mp4';
import RealWeather from '../projects/realweather.mp4';
import Tetsuya from '../projects/tetsuyaizakaya.mp4';
import TheSoleStore from '../projects/thesolestore.mp4';
const Projects = () => {
  return (
    <section className="Projects">
      <h1 className="projectsHeader">My Projects</h1>
      <div className="projectsDiv">
        <div className="project">
          <div className="video">
            <h1>TheSoleStore</h1>
            <video autoPlay loop src={TheSoleStore} />
            <div className="projectLinks">
              <a href="https://thesolestore.herokuapp.com/" target="_blank">
                <button>Visit Website</button>
              </a>
              <a href="https://github.com/WageeshArya/TheSoleStore" target="_blank">
                <button className="githubBtn">Github</button>
              </a>
            </div>
          </div>
          <div className="projectDetails">
            <div className="projectDetailsGrid">
              <div className="technologies">
              <h3>Technologies Used</h3>
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
                <h3>Notable Features</h3>
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
        <div className="project">
          <div className="video">
            <h1>REALWeather</h1>
            <video autoPlay loop src={RealWeather} />
            <div className="projectLinks">
              <a href="https://nostalgic-volhard-d31503.netlify.app/" target="_blank">
                <button>Visit Website</button>
              </a>
              <a href="https://github.com/WageeshArya/REALWeather" target="_blank">
                <button className="githubBtn">Github</button>
              </a>
            </div>
          </div>
          <div className="projectDetails">
            <div className="projectDetailsGrid">
              <div className="technologies">
                <h3>Technologies Used</h3>
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
                <h3>Notable Features</h3>
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
                  <a href="http://openweathermap.org/" target="_blank"> openweather.org</a>
                  , using React Context and Axios to fetch data for 3 input options available.
                </p>
              </div>
        </div>
        <div className="project">
          <div className="video">
            <h1>DartChat</h1>
              <video autoPlay loop src={DartChat} />
              <div className="projectLinks">
                <a href="https://focused-villani-85fb7f.netlify.app/" target="_blank">
                  <button>Visit Website</button>
                </a>
              <a href="https://github.com/WageeshArya/DartChat" target="_blank">
                <button className="githubBtn">Github</button>
              </a>
            </div>
            </div>
            <div className="projectDetails">
              <div className="projectDetailsGrid">
                <div className="technologies">
                  <h3>Technologies Used</h3>
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
                <h3>Notable Features</h3>
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
        <div className="project">
          <div className="video">
            <h1>Homely.</h1>
            <video autoPlay loop src={Homely} />
            <div className="projectLinks">
              <a href="https://musing-spence-f30ea9.netlify.app/" target="_blank">
                <button>Visit Website</button>
              </a>
              <a href="https://github.com/WageeshArya/Homely." target="_blank">
                <button className="githubBtn">Github</button>
              </a>
            </div>
          </div>
          <div className="projectDetails">
            <div className="projectDetailsGrid">
              <div className="technologies">
                <h3>Technologies Used</h3>
                <ul>
                  <li>JSX</li>
                  <li>Javascript</li>
                  <li>SASS</li>
                  <li>React</li>
                  <li>GSAP Animations</li>
                </ul>
              </div>
              <div className="features">
                <h3>Notable Features</h3>
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
        <div className="project">
          <div className="video">
            <h1>Tetsuya Izakaya</h1>
            <video autoPlay loop src={Tetsuya} />
            <div className="projectLinks">
              <a href="https://wizardly-meninsky-c34418.netlify.app/" target="_blank">
                <button>Visit Website</button>
              </a>
              <a href="https://github.com/WageeshArya/Tetsuya-Izakaya" target="_blank">
                <button className="githubBtn">Github</button>
              </a>
            </div>
          </div>
          <div className="projectDetails">
            <div className="projectDetailsGrid">
              <div className="technologies">
                <h3>Technologies Used</h3>
                <ul>
                  <li>HTML</li>
                  <li>Javascript</li>
                  <li>CSS</li>
                </ul>
              </div>
              <div className="features">
                <h3>Notable Features</h3>
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
          <h1>Projects Overview</h1>
          <ul>
            <li>Fully Responsive.</li>
            <li>Efficient code.</li>
            <li>Fast loading times.</li>
            <li>Intuitive UI.</li>
            <li>Good UX.</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Projects;