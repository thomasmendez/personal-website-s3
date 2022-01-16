import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography } from '@mui/material';

const JobRole = (props) => {
  const { jobRole, fontStyle } = props;
  return(
    <Grid container item xs={12}>
      <Typography
        sx={{
          fontStyle: fontStyle,
        }}
      >
        {jobRole}
      </Typography>
    </Grid>
  );
};

JobRole.defaultProps = {
  fontStyle: 'italic',
};

JobRole.propTypes = {
  jobRole: PropTypes.string.isRequired,
  fontStyle: PropTypes.string,
};

export default JobRole;