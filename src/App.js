import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import SignIn from './components/SignIn';

function App() {
    return (
        <Router>
            <nav className="navbar">
                <h1 className="site-title">FunZone</h1>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/signin">Sign In</Link></li>
                </ul>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signin" element={<SignIn />} />
            </Routes>
        </Router>
    );
}

export default App;
