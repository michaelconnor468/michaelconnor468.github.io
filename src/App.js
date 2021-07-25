import React from 'react';
import Header from './components/Header.js';
import Home from './pages/Home.js';
import Body from './components/Body.js';

import './App.css';
import styles from './App.module.css';

const App = () => {
    const [body, setBody] = React.useState(<Home />);

    return (
        <>
            <Header setBody={setBody} />
            <Body body={body} setBody={setBody} />
        </>
    );
};

export default App;
