import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const LinkNoDecoration = ({ to, children }) => (
  <Link
    to={to}
    style={{
      textDecoration: 'none', display: 'block', color: 'black', hover: false,
    }}
  >
    {children}
  </Link>
);

LinkNoDecoration.propTypes = {
  to: PropTypes.string,
  children: PropTypes.element.isRequired,
};

export default LinkNoDecoration;