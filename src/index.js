import React from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga4';
import App from './App';

ReactGA.initialize(process.env.GOOGLE_ANALYTICS_TRACKING_ID);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
