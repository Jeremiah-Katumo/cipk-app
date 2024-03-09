import React from 'react';
import ReactDOM from 'react-dom/client';
// import { GlobalProvider } from './context/GlobalContext';
// import ErrorBoundary from './ErrorBoundary';
import App from './App';
// import RouterComponent from './Router';
// import { BrowserRouter as Router } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <GlobalProvider >
        <App />
    // </GlobalProvider>
);
