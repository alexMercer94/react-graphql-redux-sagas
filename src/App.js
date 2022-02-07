import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './pages/homepage/homepage.component';

function HatsPage() {
    return (
        <div>
            <h1>Hats page</h1>
        </div>
    );
}

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Homepage />} />
            </Routes>
        </div>
    );
}

export default App;
