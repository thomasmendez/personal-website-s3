import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography } from '@mui/material';

const WorkDate = (props) => {
  const { date, fontWeight } = props;
  return(
    <Grid container item xs={12} justifyContent="flex-end">
      <Typography
        sx={{
          fontWeight: fontWeight,
        }}
      >
        {date.startDate + ' - ' + date.endDate}
      </Typography>
    </Grid>
  );
};

WorkDate.defaultProps = {
  fontWeight: 600,
};

WorkDate.propTypes = {
  date: PropTypes.shape({
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string.isRequired,
  }),
  fontWeight: PropTypes.number,
};

export default WorkDate;