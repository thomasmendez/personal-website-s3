import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@mui/material';

const JobDescription = (props) => {
  const { arrayOfStrings } = props;
  return(
    <ul>
      {arrayOfStrings.map((task, index) => {
        return(
          <li key={index}>
            <Typography>
              {task}
            </Typography>
          </li>
        );
      })}
    </ul>
  );
};

JobDescription.defaultProps = {
  arrayOfStrings: [],
};

JobDescription.propTypes = {
  arrayOfStrings: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default JobDescription;