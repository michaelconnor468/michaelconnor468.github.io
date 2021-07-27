import React from 'react';
import Home from '../pages/Home.js';
import Projects from '../pages/Projects.js';
import Experience from '../pages/Experience.js';

import styles from './Header.module.css'

const Header = (props) => {
    const [navOpen, setNavOpen] = React.useState(false);

    return (
        <div className={styles.header}>
            <div className={styles.innerheader}>
                <div>
                    <img src='resources/images/jay.png' onClick={() => props.setBody(<Home />)}/>
                </div>
                <nav className={navOpen ? styles.navopen : styles.navclosed}>
                    <button onClick={() => {setNavOpen(false); props.setBody(<Home />)}}>Home</button>
                    <button onClick={() => {setNavOpen(false); props.setBody(<Projects />)}}>Projects</button>
                    <button onClick={() => {setNavOpen(false); props.setBody(<Experience />)}}>Experience</button>
                    {/*<button>Interests</button>*/}
                    <button onClick={() => {setNavOpen(false); window.open('resources/Resume.pdf', '_blank')}}>Resume</button>
                    {/*<button>Contact</button>*/}
                </nav>
                <nav className={styles.socials}>
                    <img src='resources/images/linkedin.png' onClick={() => window.open('https://www.linkedin.com/in/michael-c-32a934163', '_blank')}/>
                    <img src='resources/images/github.png' onClick={() => window.open('https://github.com/michaelconnor468', '_blank')}/>
                </nav>
                <button className={styles.navtoggle} onClick={() => setNavOpen(open => !open)}> <span></span><span></span><span></span> </button>
            </div>
        </div>
    )
};

export default Header;