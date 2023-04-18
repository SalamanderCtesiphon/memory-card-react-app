import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { initializeApp } from 'firebase/app';

import { getFirebaseConfig } from './firebase-config.js';

const firebaseAppConfig = getFirebaseConfig();




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// TODO 0: Initialize Firebase
initializeApp(firebaseAppConfig);
// TODO 12: Initialize Firebase Performance Monitoring

