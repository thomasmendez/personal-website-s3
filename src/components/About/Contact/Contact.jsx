import React from 'react';
import { Grid, Typography } from '@mui/material';
import ContactMethod from './ContactMethod';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

const Contact = () => {
    return(
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
    );
};

export default Contact;