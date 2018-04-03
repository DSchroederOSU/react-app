import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import ResumePage from './components/ResumePage';

//import { generateSitePath } from './SitePath';

var navLinks = [
    {
        path: '/',
        title: 'Home',
        isHeading: true
    },
    {
        path: '/resume',
        title: 'Resume',
        isLink: true
    },
    {
        path: 'https://github.com/DSchroederOSU',
        title: 'GitHub',
        isRight: true,
        isExternal: true
    }
];

class App extends Component {

    render() {
        return (
            <Router>
                <div>
                    <Navbar links={navLinks} />
                    <Switch>
                        <Route exact path={'/'} component={HomePage} />
                        <Route exact path={'/resume'} component={ResumePage} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
