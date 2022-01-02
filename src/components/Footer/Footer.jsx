import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography } from '@mui/material';
import ContactMethod from '../ContactMethod';

const Footer = (props) => {
  const { contacts } = props;
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
      <Grid container item xs={3} direction="row" spacing={1}>
        {contacts.map((contact, index) => (
          <ContactMethod
            key={index}
            direction='row'
            contactMethodName={contact.contactMethod}
            icon={contact.icon}
            hrefLink={contact.hrefLink}
          />
        ))}
      </Grid>
    </Grid>
  );
};

Footer.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      contactMethod: PropTypes.string.isRequired,
      icon: PropTypes.element.isRequired,
      hrefLink: PropTypes.string.isRequired,
    }),
  ),
};

export default Footer;