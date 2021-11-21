import React from 'react';

const Error = ({ errorCode }) => {
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

export default Error;
