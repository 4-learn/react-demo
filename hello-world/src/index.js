import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Greeting from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Greeting name="John" />);
