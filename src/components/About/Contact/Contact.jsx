import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography } from '@mui/material';
import ContactMethod from './ContactMethod';

const Contact = (props) => {
  const { contacts } = props;
  return(
    <Grid container item sm={4} md={5}>
      <Grid item>
        <Typography variant="h5">
          Contact
        </Typography>
      </Grid>
      {contacts.map((contact, index) => (
        <ContactMethod
          key={index}
          contactMethodName={contact.contactMethod}
          icon={contact.icon}
          hrefLink={contact.hrefLink}
        />
      ))}
    </Grid>
  );
};

Contact.defaultProps = {
  contacts: [],
};

Contact.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      contactMethod: PropTypes.string.isRequired,
      icon: PropTypes.element.isRequired,
      hrefLink: PropTypes.string.isRequired,
    }),
  ),
};

export default Contact;