import React from 'react';
import Content from './Experience.content.js';
import Project from '../components/Project.js';

import styles from './Projects.module.css';

const Experience = () => {
    return (
        <>{Content.map(project => <Project project={project} />)}</>
    );
};

export default Experience;