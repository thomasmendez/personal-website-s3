import React from 'react';
import { Grid, Typography } from '@mui/material';

const AboutMe = () => {
    return(
      <Grid container item sm={4} spacing={3}>
        <Grid item>
          <Typography variant="h5">
            About Me
          </Typography>
        </Grid>
        <Grid item>
          <Typography>
            I am a passionate software engineer who loves to solve real world problems using new unexplored technologies.
            I enjoy developing good user experiences, wether it be for desktop, mobile, or video games.
            Always looking forward to working on the next big project.
          </Typography>
        </Grid>
        <Grid item>
          <Typography>
            EDUCATION
          </Typography>
        </Grid>
        <Grid item>
          <Typography>
            Bachelor of Science in Arts and Entertainment Technologies, at The University of Texas at Austin
            August 2016 - May 2018
          </Typography>
        </Grid>
      </Grid>
    );
};

export default AboutMe;