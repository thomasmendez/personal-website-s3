import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import GA4React, { useGA4React } from 'ga-4-react';

// const TRACKING_ID = 'G-7RPZJ5Y9EK';
const TRACKING_ID = 'G-G55CRQQW6N';
const ga4react = new GA4React(TRACKING_ID);

async function trackPage(location) {
  ga4react.initialize().then((ga4) => {
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
  
  // useEffect(() => {
  //   trackPage();
  // }, []);

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
