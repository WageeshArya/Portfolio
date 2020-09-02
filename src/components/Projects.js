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
      <div className="projectsDiv">
        <div className="project">
          <div className="video">
            <video autoPlay loop src={RealWeather} />
          </div>
          <div className="projectDetails">
            <h1>REALWeather</h1>
            <div>
              <h3>Technologies Used</h3>
              <ul>
                <li>Javascript</li>
                <li>CSS</li>
                <li>React</li>
                <li>React Context</li>
                <li>Fetch API</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="project projectOdd">
          <div className="projectDetails">
            <h1>The Sole Store</h1>
            <div>
              <h3>Technologies Used</h3>
              <ul>
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
          </div>
          <div className="video">
            <video autoPlay loop src={TheSoleStore} />
          </div>
        </div>
        <div className="project">
          <div className="video">
              <video autoPlay loop src={DartChat} />
            </div>
            <div className="projectDetails">
              <h1>DartChat</h1>
              <div>
                <h3>Technologies Used</h3>
                <ul>
                  <li>Javascript</li>
                  <li>SASS</li>
                  <li>React</li>
                  <li>React Context</li>
                  <li>Firebase Storage</li>
                  <li>Firebase Authentication</li>
                </ul>
              </div>
            </div>
        </div>
        <div className="project projectOdd">
          <div className="projectDetails">
            <h1>Homely</h1>
            <div className="projectDetailsGrid">
              <div className="technologies">
                <h3>Technologies Used</h3>
                <ul>
                  <li>Javascript</li>
                  <li>SASS</li>
                  <li>React</li>
                  <li>GSAP Animations</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="video">
            <video autoPlay loop src={Homely} />
          </div>
        </div>
        <div className="project">
          <div className="video">
            <video autoPlay loop src={Tetsuya} />
          </div>
          <div className="projectDetails">
            <h1>Tetsuya Izakaya</h1>
            <div className="projectDetailsGrid">
              <div className="technologies">
                <h3>Technologies Used</h3>
                <ul>
                  <li>HTML</li>
                  <li>Javascript</li>
                  <li>CSS</li>
                </ul>
              </div>              
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects;