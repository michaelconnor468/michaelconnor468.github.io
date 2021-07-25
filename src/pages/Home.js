import React from 'react';

import styles from './Home.module.css';

const Home = () => {
    return (
        <div className={styles.home}>
	        <img src='resources/images/jay.jpg'/>
	        <h1>Michael J. Connor</h1>
	        <h2>Software Engineer</h2>
            <p>Welcome to my webpage! I am a software engineer currently studying for my MSCS at the Georgia Institute of Technology. 
                I enjoy building and learning new things while meeting great and like-minded people. My interests are a whole host of
                subjects including mathematics, systems engineering, networking, and compilers. Feel free to browse my projects,  
                connect with me, or just say hello!</p>
        </div>
    );
}

export default Home;