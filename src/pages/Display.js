import React from 'react';
import Project from '../components/Project.js';

const Display = (props) => {
    return (
        <>{props.content.map(project => <Project project={project} />)}</>
    );
};

export default Display;