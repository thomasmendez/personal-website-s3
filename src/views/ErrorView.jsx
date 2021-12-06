import React from 'react';
import PropTypes from 'prop-types';

const ErrorView = ({ errorCode }) => {
  let message = '';

  if (errorCode === 404) {
    message = 'Not Found';
  }
  return (
    <h1>
      {errorCode}
      {' '}
      {message}
    </h1>
  );
};

ErrorView.propTypes = {
  errorCode: PropTypes.number.isRequired,
};

export default ErrorView;
