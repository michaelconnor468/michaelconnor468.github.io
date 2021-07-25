import React from 'react';
import { Document } from 'react-pdf'; 

const Resume = () => {
    <Document
        file={{
            url: 'http://www.example.com/sample.pdf'
        }}
    />
};

export default Resume;