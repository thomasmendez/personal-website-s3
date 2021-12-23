import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography } from '@mui/material';
import ContactMethod from './ContactMethod';

const Contact = (props) => {
  const { contacts } = props;
  return(
    <Grid container item sm={3}>
      <Grid item xs={12}>
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

// const Contact = (props) => {
//     return(
//       <Grid container item sm={3}>
//         <Grid item xs={12}>
//           <Typography variant="h5">
//             Contact
//           </Typography>
//         </Grid>       
//         <ContactMethod
//           contactMethodName='LinkedIn'
//           icon={<LinkedInIcon />}
//           hrefLink='https://www.linkedin.com/in/thomas-a-mendez'
//         />
//         <ContactMethod
//           contactMethodName='Github'
//           icon={<GitHubIcon />}
//           hrefLink='https://github.com/thomasmendez'
//         />
//         <ContactMethod
//           contactMethodName='Email'
//           icon={<EmailIcon />}
//           hrefLink='mailto:thomasmendez01@gmail.com'
//         />
//       </Grid>
//     );
// };

export default Contact;