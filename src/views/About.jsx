import React from 'react';
import { Grid } from '@mui/material';
import { LinkedIn, GitHub, Email } from '@mui/icons-material';

import TitleHeader from '../components/TitleHeader';

import AboutMe from '../components/About/AboutMe';
import Contact from '../components/About/Contact';

const CONTACTS = [
  {
    contactMethod: 'LinkedIn',
    icon: <LinkedIn />,
    hrefLink: 'https://www.linkedin.com/in/thomas-a-mendez',
  },
  { 
    contactMethod: 'GitHub',
    icon: <GitHub />,
    hrefLink: 'https://github.com/thomasmendez',
  },
  {
    contactMethod: 'Email',
    icon: <Email />,
    hrefLink: 'mailto:thomasmendez01@gmail.com',
  },
];

const About = () => (
  <Grid
    container
    spacing={3}
  >
    <TitleHeader />
    <Grid container item spacing={8}>
      <Grid item sm={3} />
      <AboutMe />
      <Contact contacts={CONTACTS}/>
    </Grid>
  </Grid>
);

export default About;
