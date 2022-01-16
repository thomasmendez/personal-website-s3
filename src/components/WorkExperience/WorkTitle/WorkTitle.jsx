import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography } from '@mui/material';

const WorkTitle = (props) => {
  const { jobTitle, fontWeight, company, fontStyle, location } = props;
  return(
    <Grid container item xs={12}>
      <Typography
        sx={{
          fontWeight: fontWeight,
        }}
      >
        {jobTitle}
      </Typography>
      <Typography>
        &nbsp;
      </Typography>
      <Typography>
        at
      </Typography>
      <Typography>
        &nbsp;
      </Typography>
      <Typography
        sx={{
          fontStyle: fontStyle,
        }}
      >
        {company}
      </Typography>
      <Typography>
        ,
      </Typography>
      <Typography>
        &nbsp;
      </Typography>
      <Typography>
        {location.city + ', ' + location.state}
      </Typography>
    </Grid>
  );
};

WorkTitle.defaultProps = {
  fontWeight: 600,
  fontStyle: 'italic',
};

WorkTitle.propTypes = {
  jobTitle: PropTypes.string.isRequired,
  fontWeight: PropTypes.number,
  company: PropTypes.string.isRequired,
  fontStyle: PropTypes.string,
  location: PropTypes.shape({
    city: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
  }).isRequired,
};

export default WorkTitle;