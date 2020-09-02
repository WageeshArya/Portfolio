import React, { useEffect } from 'react';
import './Navbar.scss';
import gsap, { TimelineLite } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Navbar = () => {
    gsap.registerPlugin(ScrollTrigger);
    let tl = new TimelineLite();
    useEffect(() => {
        gsap.to('.logo span', {
            opacity: 1,
            x: 30,
            stagger: 0.3
        });
        // eslint-disable-next-line
    },[]);
    return (
        <nav>
            <ul>
                <li className="logo"> 
                    <span>W</span>
                    <span>A</span>
                </li>
                <div className="navLinks">
                    <li>Download Resume</li>
                    <li>Skills</li>
                    <li>Projects</li>
                    <li>Contact Me</li>
                    <li>
                        <select name="language" id="language">
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
