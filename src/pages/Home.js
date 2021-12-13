import React from 'react';
import { Transition } from 'react-transition-group';

import styles from './Home.module.css';

const Home = () => {
    return (
        <div className={styles.home}>
	        <img src='resources/images/jay.jpg'/>
	        <h1>Michael J. Connor</h1>
	        <h2>Software Engineer</h2>
            <p>
                Welcome to my webpage! I am a software engineer currently studying for my Masters in Computer Science at the Georgia Institute of Technology 
                with a focus in Distributed Systems. I enjoy building and learning new things while meeting great and like-minded people. Feel free to browse my projects,  
                connect with me, or just say hello!
            </p>
            <div className={styles.education}>
                <div>
                    <img src='resources/images/uoft.png' />
                    <h1><b>{`Bachelor's in Computer Science`}</b> at <a href='https://www.utoronto.ca' target='_blank' style={{color: '#002a5c'}}>University of Toronto</a></h1>
                    <h2>2017-2021</h2>
                </div>
                <div>
                    <img src='resources/images/gatech.gif' />
                    <h1><b>{`Master's in Computer Science`}</b> at <a href ='https://www.gatech.edu' target='_blank' style={{color: '#A4925A'}}>Georgia Institute of Technology</a></h1>
                    <h2>2021-2023</h2>
                </div>
            </div>
        </div>
    );
}

export default Home;
