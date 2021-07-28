import React from 'react';
import Content from './Projects.content.js';
import Project from '../components/Project.js';

import styles from './Projects.module.css';

const Projects = () => {
    return (
        <>{Content.map(project => <Project project={project} />)}</>
    );
};

export default Projects;