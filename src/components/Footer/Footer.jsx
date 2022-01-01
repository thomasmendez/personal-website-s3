import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography } from '@mui/material';
import { LinkedIn, GitHub, Email } from '@mui/icons-material';

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

const ContactMethod = (props) => {
  const { icon, hrefLink, textDecoration, color, hoverColor } = props;
  return(
    <Typography component='a' target="_blank" href={hrefLink}
      sx={{
        textDecoration: textDecoration,
        color: color,
        '&:hover': {
          color: hoverColor,
        },
      }}
    >
      {icon}
    </Typography>
  );
};
  
ContactMethod.defaultProps = {
  textDecoration: 'none',
  color: 'black',
  hoverColor: '#800080',
};
  
ContactMethod.propTypes = {
  contactMethodName: PropTypes.string,
  icon: PropTypes.element,
  hrefLink: PropTypes.string,
  textDecoration: PropTypes.string,
  color: PropTypes.string,
  hoverColor: PropTypes.string,
};

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