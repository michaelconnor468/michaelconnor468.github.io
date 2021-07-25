import React from 'react';
import Home from '../pages/Home.js'
import Resume from '../pages/Resume.js';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import styles from './Body.module.css';

const Body = (props) => {
    return props.body;
};

export default Body;