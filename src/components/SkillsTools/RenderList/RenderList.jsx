import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@mui/material';

const RenderList = (props) => {
  const { arrayOfObjects } = props;
  return(
    <ul>
      {arrayOfObjects.map((arrayKey, index) => {
        return(
          <li key={index}>
            {Object.entries(arrayKey).map(([key, value]) => {
              return(
                <Typography key={key}>
                  {key + ': ' + value.join(', ')}
                </Typography>
              );
            })}
          </li>
        );
      })}
    </ul>
  );
};

RenderList.propTypes = {
  arrayOfObjects: PropTypes.arrayOf(PropTypes.shape({
    object: PropTypes.arrayOf(PropTypes.string),
  })),
};

export default RenderList;