import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@mui/material';

import TitleHeaderProfile from '../components/TitleHeader/TitleHeaderProfile';

import AboutMe from '../components/About/AboutMe';
import Contact from '../components/About/Contact';

const About = (props) => {
  useEffect(() => document.title = props.title, [props.title]);
  const { contacts } = props;
  return(
    <Grid container spacing={3}>
      <TitleHeaderProfile />
      <Grid container item spacing={{ xs: 3, md: 3 }} ml={{ xs: 5, md: 10, lg: 30, xl: 50 }} mr={{ xs: 5, md: 10, lg: 30, xl: 50 }}>
        <Grid item xs={12} md={10} lg={10} xl={10}>
          <AboutMe />
        </Grid>
        <Grid item xs={12} md={2} lg={2} xl={2}>
          <Contact contacts={contacts}/>
        </Grid>
      </Grid>
    </Grid>
  );
};

About.propTypes = {
  title: PropTypes.string.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      contactMethod: PropTypes.string.isRequired,
      icon: PropTypes.element.isRequired,
      hrefLink: PropTypes.string.isRequired,
    }),
  ),
};

export default About;
