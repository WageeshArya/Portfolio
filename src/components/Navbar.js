import React, { useEffect } from 'react';
import './Navbar.scss';
import gsap, { TimelineLite } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Navbar = () => {
    gsap.registerPlugin(ScrollTrigger);
    let tl = new TimelineLite();
    useEffect(() => {
        tl.to('.logo span', {
            opacity: 1,
            x: 30,
            stagger: 0.3
            // scrollTrigger: {
            //     start: 'bottom center+=100',
            //     end: 'bottom bottom',
            //     markers: true,
            //     toggleActions: 'play none none reverse'
            // }
        })
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
                </div>
                
            </ul>
        </nav>
    )
}

export default Navbar
