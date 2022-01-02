import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography } from '@mui/material';
import ContactMethod from '../../ContactMethod';

const Contact = (props) => {
  const { contacts } = props;
  return(
    <Grid container item>
      <Grid item xs={12} sm={12}>
        <Typography variant="h5">
          Contact
        </Typography>
      </Grid>

      <Grid item xs={12} sm={12}>
        {contacts.map((contact, index) => (
          <ContactMethod
            key={index}
            direction="column"
            contactMethodName={contact.contactMethod}
            icon={contact.icon}
            hrefLink={contact.hrefLink}
          />
        ))}
      </Grid>
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