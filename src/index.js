import React from 'react';
import ReactDOM from 'react-dom';
import ga4React from './analytics/ga4React';
import App from './App';

ga4React.initialize();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
