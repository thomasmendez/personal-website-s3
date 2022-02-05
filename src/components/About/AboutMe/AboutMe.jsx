import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography } from '@mui/material';
import useWindowDimensions from '../../../utils/windowDimensions';
import { BREAKPOINTSTORYBOOKSMALLMOBILEL } from '../../../utils/breakpoints';
const AboutMe = (props) => {
  const { fontWeight } = props;
  const { width } = useWindowDimensions();
  return(
    <Grid container item spacing={3}>
      <Grid item xs={12} sm={12}>
        <Typography variant="h5">
          About Me
        </Typography>
      </Grid>
      <Grid item xs={12} sm={12}>
        <Typography>
          I am a passionate software engineer who loves to solve real world problems using new unexplored technologies.
          I enjoy developing good user experiences, wether it be for desktop, mobile, or video games.
          Always looking forward to working on the next big project.
        </Typography>
      </Grid>
      <Grid item xs={12} sm={12}>
        <Typography variant="h6">
          Education
        </Typography>
      </Grid>
      <Grid item xs={8} sm={8}>
        <Typography>
          Bachelor of Science in Arts and Entertainment Technologies, at The University of Texas at Austin
        </Typography>
      </Grid>
      <Grid container item xs={2} sm={4} justifyContent={width > BREAKPOINTSTORYBOOKSMALLMOBILEL && 'flex-end'}>
        <Typography
          sx={{
            fontWeight: fontWeight,
          }}
        >
          August 2016 - May 2019
        </Typography>
      </Grid>
      <Grid item xs={9} sm={12}>
        <ul>
          <li>
            <Typography>
              Elements of Computing Certificate
            </Typography>
          </li>
        </ul>
      </Grid>
      <Grid item xs={3}/>
    </Grid>
  );
};

AboutMe.defaultProps = {
  fontWeight: 600,
};

AboutMe.propTypes = {
  fontWeight: PropTypes.number,
};

export default AboutMe;