import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // 전역 CSS (있다면)
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);