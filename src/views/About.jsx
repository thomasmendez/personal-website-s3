import React from 'react';
import { Grid, Typography } from '@mui/material';
import TitleHeader from '../components/TitleHeader';
import ContactMethod from '../components/ContactMethod';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

const About = () => (
  <Grid
    container
    spacing={3}
  >
    <TitleHeader />
    <Grid container item spacing={8}>
      <Grid item sm={3} />
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
      <Grid container item sm={3}>
        <Grid item xs={12}>
          <Typography variant="h5">
            Contact
          </Typography>
        </Grid>
        <ContactMethod
          contactMethodName='LinkedIn'
          icon={<LinkedInIcon />}
          hrefLink='https://www.linkedin.com/in/thomas-a-mendez'
        />
        <ContactMethod
          contactMethodName='Github'
          icon={<GitHubIcon />}
          hrefLink='https://github.com/thomasmendez'
        />
        <ContactMethod
          contactMethodName='Email'
          icon={<EmailIcon />}
          hrefLink='mailto:thomasmendez01@gmail.com'
        />
      </Grid>
    </Grid>
  </Grid>
);

export default About;
