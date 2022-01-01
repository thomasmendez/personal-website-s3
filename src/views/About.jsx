import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@mui/material';

import TitleHeaderProfile from '../components/TitleHeader/TitleHeaderProfile';

import AboutMe from '../components/About/AboutMe';
import Contact from '../components/About/Contact';

const About = (props) => {
  const { contacts } = props;
  return(
    <Grid container spacing={3}>
      <TitleHeaderProfile />
      <Grid container item spacing={8}>
        <Grid item sm={0} md={3} />
        <AboutMe />
        <Contact contacts={contacts}/>
      </Grid>
    </Grid>
  );
};

About.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      contactMethod: PropTypes.string.isRequired,
      icon: PropTypes.element.isRequired,
      hrefLink: PropTypes.string.isRequired,
    }),
  ),
};

export default About;
