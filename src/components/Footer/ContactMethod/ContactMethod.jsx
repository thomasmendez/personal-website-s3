import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@mui/material';

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
  icon: PropTypes.element,
  hrefLink: PropTypes.string,
  textDecoration: PropTypes.string,
  color: PropTypes.string,
  hoverColor: PropTypes.string,
};

export default ContactMethod;