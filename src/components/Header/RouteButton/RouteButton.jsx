import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const RouteButton = ({ to, children }) => (
  <Button color='inherit' component={Link} to={to}>
    {children}
  </Button>
);

RouteButton.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export default RouteButton;