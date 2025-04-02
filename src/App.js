/* eslint-disable */
import React from 'react'
import {Router} from 'react-router-dom'
import {history} from './helpers/history'
import './App.css'

import Routes from "./Routes"

const App = () => {
    return <div className="App">
        <ReactNotification/>
        <Router history={history}>
            <Routes/>
        </Router>
    </div>
}

export default App
