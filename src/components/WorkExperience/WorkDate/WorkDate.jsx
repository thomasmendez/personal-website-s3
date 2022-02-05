import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography } from '@mui/material';
import useWindowDimensions from '../../../utils/windowDimensions';
import { BREAKPOINTSTORYBOOKSMALLMOBILEL } from '../../../utils/breakpoints';

const WorkDate = (props) => {
  const { date, fontWeight } = props;
  const { width } = useWindowDimensions();
  return(
    <Grid container item xs={12} justifyContent={width > BREAKPOINTSTORYBOOKSMALLMOBILEL && 'flex-end'}>
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