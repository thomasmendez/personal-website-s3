import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography } from '@mui/material';
import useWindowDimensions from '../utils/windowDimensions';

const ErrorView = ({ errorCode }) => {
  const { height } = useWindowDimensions();
  const errorPageHeight = height * 0.75;
  let message = '';

  if (errorCode === 404) {
    message = 'Not Found';
  }
  return (
    <Grid container justifyContent="center">
      <Grid item sx={{height: errorPageHeight}}>
        <Typography variant="h3">
          {errorCode}
          {' '}
          {message}
        </Typography>
      </Grid>
    </Grid>
  );
};

ErrorView.propTypes = {
  errorCode: PropTypes.number.isRequired,
};

export default ErrorView;
