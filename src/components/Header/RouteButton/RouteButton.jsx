import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const RouteButton = ({ to, children, link }) => {
  if (link) {
    return(
      <Button color='inherit' component={'a'} href={link} target='_blank' rel='nooopener'>
        {children}
      </Button>
    );
  }
  return(
    <Button color='inherit' component={Link} to={to}>
      {children}
    </Button>
  );
};

RouteButton.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  link: PropTypes.string,
};

export default RouteButton;