import React from 'react';
import Home from '../pages/Home.js'
import Resume from '../pages/Resume.js';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import styles from './Body.module.css';

const Body = () => {
    return (
        <Router>
            <Route path='/'>
                <Home />
            </Route>
            <Route path='/home'>
                <Home />
            </Route>
            <Route path='/resume'>
                <Resume />
            </Route>
        </Router>
    );
};

export default Body;