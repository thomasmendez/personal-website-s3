import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography } from '@mui/material';
import useWindowDimensions from '../utils/windowDimensions';

const ErrorView = (props) => {
  const { errorCode, title } = props;
  useEffect(() => document.title = title, []);
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
  title: PropTypes.string.isRequired,
  errorCode: PropTypes.number.isRequired,
};

export default ErrorView;
