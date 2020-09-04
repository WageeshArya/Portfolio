import React, { useEffect, useContext } from 'react';
import LanguageContext from '../context/LanguageContext';
import './Navbar.scss';
import Scroll from 'react-scroll';
import gsap, { TimelineLite } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import languageContext from '../context/LanguageContext';

const Navbar = () => {

    const ScrollLink = Scroll.Link;
    const languageContext = useContext(LanguageContext);

    gsap.registerPlugin(ScrollTrigger);
    let tl = new TimelineLite();
    useEffect(() => {
        gsap.to('.logo a span', {
            opacity: 1,
            x: 30,
            stagger: 0.3
        });
        tl.to('.logo a span', {
            scrollTrigger: {
                trigger: '.techSkills',
                start: 'top top+=75',
                end: 'center bottom',
                toggleActions: 'play none none reverse'
            },
            color: '#FFBB33',
            duration: 1,
            ease: 'power4.inOut'
        })
        tl.to('.logo a span', {
            scrollTrigger: {
                trigger: '.intro',
                start: 'center bottom',
                end: 'center top',
                toggleActions: 'play none none none',
                color: '#3CD3AD',
                duration: 1,
                ease: 'power4.inOut'
            }
        })
        tl.to('.logo a span', {
            scrollTrigger: {
                trigger: '.Projects',
                start: 'top top+=75',
                end: 'center bottom',
                toggleActions: 'play none none reverse'
            },
            color: '#FFFF00',
            duration: 1
        })
        tl.to('.logo a span', {
            scrollTrigger: {
                trigger: '.contactMe',
                start: 'top top+=75',
                end: 'bottom bottom',
                toggleActions: 'play none none reverse',
            },
            color: 'blue',
            duration: 1
        })
        console.log(typeof window.innerWidth);
        // eslint-disable-next-line
    },[]);

    const changeLanguage = (e) => {
        console.log(e.target.value);
        if(e.target.value === 'japanese') {
            languageContext.setJapanese();
        }
        else {
            languageContext.setEnglish();
        }
    }

    return (
        <nav>
            <ul>
                <li className="logo"> 
                    <ScrollLink
                    to="intro" 
                    spy={true} 
                    smooth={true} 
                    duration={25}>
                        <span>W</span>
                        <span>A</span>
                    </ScrollLink>
                </li>
                <div className="navLinks hideNav">
                    <li className="download"><a href={require('../resume/English.pdf')} download>
                    {languageContext.language === 'english' ?
                        'Download Resume'
                        :
                        '履歴書をダウンロード'
                    }
                    </a></li>
                    <li id="skillLink">
                        <ScrollLink
                        to="skills" 
                        spy={true} 
                        smooth={true} 
                        duration={25}>
                        {languageContext.language === 'english' ?
                            'Skills'
                            :
                            'スキル'
                        }
                        </ScrollLink>
                    </li>
                    <li id="projectsLink">
                        <ScrollLink
                        to="projects" 
                        spy={true} 
                        smooth={true} 
                        duration={25}>
                        {languageContext.language === 'english' ?
                            'Projects'
                            :
                            'プロジェクト'
                        }
                        </ScrollLink>
                    </li>
                    <li id="contactLink">
                        <ScrollLink
                        to="contact" 
                        spy={true} 
                        smooth={true} 
                        duration={25}>
                        {languageContext.language === 'english' ?
                        'Contact Me'
                        :
                        '連絡'
                    }
                        </ScrollLink>
                    </li>
                    <li>
                        <select name="language" id="language" onChange={changeLanguage}>
                            <option value="english">English</option>
                            <option value="japanese">日本語</option>
                        </select>
                    </li>
                </div>
            </ul>
        </nav>
    )
}

export default Navbar
