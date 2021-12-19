import React from 'react';
import { Grid } from '@mui/material';
import TitleHeader from '../components/TitleHeader';

import AboutMe from '../components/About/AboutMe';
import Contact from '../components/About/Contact';

const About = () => (
  <Grid
    container
    spacing={3}
  >
    <TitleHeader />
    <Grid container item spacing={8}>
      <Grid item sm={3} />
      <AboutMe />
      <Contact />
    </Grid>
  </Grid>
);

export default About;
