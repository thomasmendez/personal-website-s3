import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@mui/material';

const IconLink = (props) => {
  const { hrefLink, textDecoration, color, hoverColor, icon } = props;
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

IconLink.defaultProps = {
  textDecoration: 'none',
  color: 'black',
  hoverColor: '#800080',
};
  
IconLink.propTypes = {
  icon: PropTypes.element,
  hrefLink: PropTypes.string,
  textDecoration: PropTypes.string,
  color: PropTypes.string,
  hoverColor: PropTypes.string,
};

export default IconLink;