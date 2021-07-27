import React from 'react';
import Home from '../pages/Home.js'

import styles from './Body.module.css';

const Body = (props) => {
    return (
        <div className={styles.scrollbody}>
            <div className={styles.body}>{props.body}</div>
        </div>
    );
};

export default Body;