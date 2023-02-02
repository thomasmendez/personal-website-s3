import { GA4React } from 'ga-4-react';

const TRACKING_ID = process.env.GOOGLE_ANALYTICS_TRACKING_ID;

const ga4react = new GA4React(TRACKING_ID);

export default ga4react;
