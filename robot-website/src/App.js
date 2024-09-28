import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import ProductInfo from './components/ProductInfo';
import Specifications from './components/Specifications';
import ControlPanel from './components/ControlPanel';
import About from './components/About';
import Features from './components/Features';
import Algorithm from './components/Algorithm';
import './App.css';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/product-info" element={<ProductInfo />} />
                    <Route path="/specifications" element={<Specifications />} />
                    <Route path="/control-panel" element={<ControlPanel />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/features" element={<Features />} />
                    <Route path="/algorithm" element={<Algorithm />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
