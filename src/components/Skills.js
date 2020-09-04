import React, { useEffect } from 'react';
import './Skills.scss';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Element } from 'react-scroll';
const Skills = () => {

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.from(".skill-h1 span", {
      scrollTrigger: {
        trigger: ".skill-h1 span",
        start: 'top center+=200',
        end: 'bottom top-=100',
        scrub: true,
        toggleActions: 'play none none reverse'
      },
      height: 0,
      ease: 'power4.inOut'
    })
    gsap.from(".frontend li", {
      scrollTrigger: {
        trigger: ".techSkills",
        start: 'top center',
        end: 'center center',
        scrub: true,
        toggleActions: 'play none none reverse'
      },
      x: -75,
      opacity: 0,
      stagger: 0.1
    })
    gsap.from(".backend li", {
      scrollTrigger: {
        trigger: ".techSkills",
        start: 'top center',
        end: 'center center',
        scrub: true,
        toggleActions: 'play none none reverse'
      },
      y: 100,
      opacity: 0,
      stagger: 0.1
    })
    gsap.from(".otherTech li", {
      scrollTrigger: {
        trigger: ".techSkills",
        start: 'top center',
        end: 'center center',
        scrub: true,
        toggleActions: 'play none none reverse'
      },
      x: 75,
      opacity: 0,
      stagger: 0.1
    })
    // eslint-disable-next-line
  }, []);

  return (
    <Element id="skills" name="skills">
    <section className="techSkills">
      <div className="skillHeader">
        <h1 className="skill-h1"><span>Skills</span></h1>
      </div>
      <div className="skillDivs">
        <div className="tech">
          <h3>Front End</h3>
          <ul className="frontend">
            <li>
              <img src={require('../icons/html.svg')} alt="HTML5"/>
              <p>HTML5</p>
            </li>
            <li>
              <img src={require('../icons/css.svg')} alt="CSS3"/>
              <p>CSS3</p>
            </li>
            <li>
              <img src={require('../icons/sass.svg')} alt="CSS3"/>
              <p>Sass</p>
            </li>
            <li>
              <img src={require('../icons/javascript.svg')} alt="Javascript"/>
              <p>Javascript</p>
            </li>
            <li>
              <img src={require('../icons/react.svg')} alt="React/Redux"/>
              <p>React/Redux</p>
            </li>
          </ul>
        </div>
        <div className="tech">
          <h3>Back End</h3>
            <ul className="backend">
              <li>
                <img src={require('../icons/node.svg')} alt="NodeJS"/>
                <p>NodeJS</p>
              </li>
              <li>
                <img src={require('../icons/expressjs.svg')} alt="ExpressJS"/>
                <p>Express</p>
              </li>
              <li>
                <img src={require('../icons/mongo.svg')} alt="MongoDB"/>
                <p>MongoDB</p>
              </li>
              <li>
                <img src={require('../icons/mongoose.png')} style={{width: '60px'}} alt="Mongoose"/>
                <p>Mongoose</p>
              </li>
            </ul>
        </div>
        <div className="tech">
          <h3>Other Technologies</h3>
          <ul className="otherTech">
            <li>
              <img src={require('../icons/jwt.svg')} alt="JSON Web Token"/>
              <p>JSON Web Token</p>
            </li>
            <li>
              <img src={require('../icons/javascript.svg')} alt="Asyncronous Javascript"/>
              <p>Asynchronous Javascript</p>
            </li>
            <li>
              <div className="liDiv">
                <img src={require('../icons/aws.svg')} alt="Amazon Web Services"/>
                <p>Amazon Web Services</p>
              </div>
            </li>
            <li>
              <img src={require('../icons/gsap.png')} alt="GSAP Animations"/>
              <p>GSAP Animations</p>
            </li>
            <li>
              <img src={require('../icons/github.svg')} alt="GSAP Animations"/>
              <p>Git/Github</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
    </Element>
  )
}

export default Skills;
