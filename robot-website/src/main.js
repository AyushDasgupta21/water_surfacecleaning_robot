import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // Include global styles if you have any

// Create a root for React 18+
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component inside the root element
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
