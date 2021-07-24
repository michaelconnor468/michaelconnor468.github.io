import React from 'react';

import styles from './Home.module.css';

const Home = () => {
    return (
        <div className={styles.home}>
	        <img src='../resources/images/jay.jpg'/>
	        <h1>Michael J. Connor</h1>
	        <h2>Software Engineer</h2>
            <p>I am a software engineer currently studying for my MSCS at the Georgia Institute of Technology. I enjoy building and learning new things while meeting great and like-minded people.</p>
        </div>
    );
}

export default Home;