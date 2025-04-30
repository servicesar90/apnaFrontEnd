import React from 'react';
import {hydrateRoot} from 'react-dom/client';
import App from './App';
import './index.css';

hydrateRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
