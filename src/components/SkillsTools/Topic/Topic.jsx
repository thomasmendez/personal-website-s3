import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@mui/material';

const Topic = (props) => {
  const { topicName } = props;
  return(
    <Typography variant="h5"
      sx={{
        textDecoration: 'underline',
      }}
    >
      {topicName}
    </Typography>
  );
};

Topic.propTypes = {
  topicName: PropTypes.string,
};

export default Topic;