import React from 'react';
import { Grid, Typography } from '@mui/material';
import { LinkedIn, GitHub, Email } from '@mui/icons-material';
import ContactMethod from './ContactMethod';

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

const Footer = () => {
  return(
    <Grid container sx={{borderTop: 'solid 1px gray'}} mt={3} pt={3} pb={3} direction="row" justifyContent="flex-end" alignItems="center">
      <Grid item xs={2}/>
      <Grid item xs={7}>
        <Typography>
          © 
          {' '}
          {new Date().getFullYear()}
          {' '}
          Copyright
        </Typography>
      </Grid>
      <Grid item xs={3}>
        {CONTACTS.map((contact, index) => (
          <ContactMethod
            key={index}
            contactMethodName={contact.contactMethod}
            icon={contact.icon}
            hrefLink={contact.hrefLink}
          />
        ))}
      </Grid>
    </Grid>
  );
};

export default Footer;