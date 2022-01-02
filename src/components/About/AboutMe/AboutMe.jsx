import React from 'react';
import { Grid, Typography } from '@mui/material';

const AboutMe = () => {
    return(
      <Grid container item sm={6} md={4} spacing={3}>
        <Grid item xs={1}/>
        <Grid item xs={10}>
          <Typography variant="h5">
            About Me
          </Typography>
        </Grid>
        <Grid item xs={1}/>

        <Grid item xs={1}/>
        <Grid item xs={10}>
          <Typography>
            I am a passionate software engineer who loves to solve real world problems using new unexplored technologies.
            I enjoy developing good user experiences, wether it be for desktop, mobile, or video games.
            Always looking forward to working on the next big project.
          </Typography>
        </Grid>
        <Grid item xs={1}/>

        <Grid item xs={1}/>
        <Grid item xs={10}>
          <Typography variant="h6">
            Education
          </Typography>
        </Grid>
        <Grid item xs={1}/>

        <Grid item xs={1}/>
        <Grid item xs={10}>
          <Typography>
            Bachelor of Science in Arts and Entertainment Technologies, at The University of Texas at Austin
          </Typography>
        </Grid>
        <Grid item xs={1}/>

        <Grid item xs={1}/>
        <Grid item xs={10}>
          August 2016 - May 2019
        </Grid>
        <Grid item xs={1}/>

        <Grid item xs={1}/>
        <Grid item xs={10}>
          <ul>
            <li>
              <Typography>
                Elements of Computing Certificate
              </Typography>
            </li>
          </ul>
        </Grid>
        <Grid item xs={1}/>
      </Grid>
    );
};

export default AboutMe;