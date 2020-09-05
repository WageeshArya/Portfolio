import React, { useEffect, useContext } from 'react';
import LanguageContext from '../context/LanguageContext';
import './Intro.scss';
import gsap, { TimelineLite } from 'gsap';
import Scroll from 'react-scroll';
import { Element } from 'react-scroll';
import Lottie from 'react-lottie';
import Lottie1 from '../lottie/1.json';
import Lottie2 from '../lottie/2.json';
import Lottie3 from '../lottie/3.json';

const Intro = () => {

    const languageContext =  useContext(LanguageContext);
    const { language } = languageContext;

    const ScrollLink = Scroll.Link;

    gsap.registerPlugin({ TimelineLite });
    let tl = new TimelineLite();
    
    useEffect(() => {

        gsap.from(".introText div h2", {
            y: 100,
            duration: 0.75,
            skewY: 10,
            ease: 'expo.inOut'
        })
        gsap.from(".introduction", {
            ease: 'expo.inOut',
            height: 0,
            duration: 0.75
        })
        gsap.from(".skillpanel", {
            x: -100,
            opacity: 0,
            duration: 0.75,
            ease: 'expo.inOut',
            stagger: {
                amount: 0.3
            }
        })
        tl.from(".linksDiv button", {
            x: -50,
            duration: 0.4,
            opacity: 0,
            ease: 'expo.inOut'
        })
        .from(".linksDiv i", {
            x: -50,
            skewX: 20,
            opacity: 0,
            duration: 0.4,
            ease: 'expo.inOut',
            stagger: 0.2
        })
        .from(".scrollDown", {
            opacity: 0
        })
        // eslint-disable-next-line
    },[window.innerWidth]);

    

    return (
        <Element id="intro" name="intro">
        <section className="intro">
            <div className="introText">
                {language === 'english' ? 
                    <h1>Hi! My name is <span className="bold">Wageesh Arya.</span></h1>
                    :
                    <h1>初めまして！私は<span className="bold">ワギーシ</span>です。</h1>
                }
                
                <div>
                    {language === 'english' ?
                        <h2>I'm a <span className="bold">full-stack developer.</span></h2>
                        :
                        <h2><span className="bold">フルスタックデベロパアー</span>です。</h2>
                    }
                    
                </div>
            </div>
            <div className="introduction">
                <div className="skills">
                    <div className="skillpanel">
                        {
                            language === 'english' ? 
                            <h4>Always eager to learn more!</h4>
                            :
                            <h4>学びたくてたまらない。</h4>
                        }
                        <Lottie options={
                            {
                                loop: true,
                                autoplay: true,
                                animationData: Lottie1,
                                rendererSettings: {
                                    preserveAspectRatio: "xMidYMid slice"
                                }
                            }
                        }/>
                        
                    </div>
                    <div className="skillpanel">
                        <h4>
                            {language === 'english' ?
                                'Always follow the best UI/UX practices.'
                                :
                                '最高なUI/UX方法。'
                            }
                            </h4>
                        <Lottie options={
                            {
                                loop: true,
                                autoplay: true,
                                animationData: Lottie2,
                                rendererSettings: {
                                    preserveAspectRatio: "xMidYMid slice"
                                }
                            }
                        }/>
                    </div>
                    <div className="skillpanel">
                        <h4>
                            {language === 'english' ?
                                'Keen attention to details.'
                                :
                                '細かい所に注意。'
                            }
                            </h4>
                        <Lottie options={
                            {
                                loop: true,
                                autoplay: true,
                                animationData: Lottie3,
                                rendererSettings: {
                                    preserveAspectRatio: "xMidYMid slice"
                                }
                            }
                        }/>
                    </div>
                </div>
                <div className="links">
                    <div className="linksDiv">
                        <button>
                        {languageContext.language === 'english' ?
                            'Download Resume'
                            :
                            '履歴書をダウンロード'
                        }
                        <a href={require('../resume/English.pdf')} download><i className="fas fa-download" /></a></button>
                        <div>
                            <a href="https://github.com/WageeshArya" target="_blank"><i className="fab fa-github" /></a>
                        </div>
                        <div>
                        <a href="https://www.linkedin.com/in/wageesh-a-463714101/" target="_blank"><i className="fab fa-linkedin" /></a>
                        </div>
                    </div>
                    <div className="scrollDown">
                        <ScrollLink
                        to="skills" 
                        spy={true} 
                        smooth={true} 
                        duration={25}>
                            <i className="fas fa-chevron-down" />
                        </ScrollLink>
                    </div>
                </div>
            </div>
        </section>
        </Element>
    )
}

export default Intro
