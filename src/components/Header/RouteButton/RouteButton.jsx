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

function requireAtLeastOne(checkProps) {
  return function(props, propName, compName) {
    const requirePropNames = Object.keys(checkProps);
    const found = requirePropNames.find((propRequired) => props[propRequired]);
    try {
      if (!found) {
        throw new Error(
          `One of ${requirePropNames.join(',')} is required by '${compName}' component.`,
        );
      }
      PropTypes.checkPropTypes(checkProps, props, propName, compName);
    } catch (e) {
      return e;
    }
    return null;
  };
}


const requireOne = requireAtLeastOne({
  to: PropTypes.string,
  link: PropTypes.string,
});

RouteButton.propTypes = {
  to: requireOne,
  children: PropTypes.string.isRequired,
  link: requireOne,
};

export default RouteButton;