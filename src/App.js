/* eslint-disable */
import React from 'react'
import {Router} from 'react-router-dom'
import {history} from './helpers/history'
import './App.css'
import {HoverProvider, useHover} from './helpers/HoverContext'
import Routes from "./Routes"

// Component wrapper with the hover effect
const AppContent = () => {
    const {backgroundImage} = useHover();
    
    // Background style when an image is available
    const backgroundStyle = backgroundImage ? {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundImage: `url("${backgroundImage}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        filter: 'blur(5px) brightness(0.7)',
        opacity: 0.3,
        zIndex: -1,
        transition: 'all 0.3s ease',
    } : {};

    return (
        <div className="App">
            {backgroundImage && (
                <div 
                    style={backgroundStyle} 
                    className="app-background"
                />
            )}
            <Router history={history}>
                <Routes/>
            </Router>
        </div>
    );
};

const App = () => {
    return (
        <HoverProvider>
            <AppContent />
        </HoverProvider>
    );
};

export default App
