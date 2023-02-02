import React from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import ga4React from './ga4React';

async function trackPage(location) {
  ga4React.initialize().then((ga4) => {
    ga4.pageview(location.pathname);
    ga4.gtag('event',location.pathname,'path'); // or your custom gtag event
    console.info(ga4);
  },(err) => {
    console.error(err);
  });
}

const TrackRoute = ({children}) => {
  const location = useLocation();
  console.info(location.pathname);

  trackPage(location);

  return(
    <div>
      {children}
    </div>
  );
};

TrackRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TrackRoute;
