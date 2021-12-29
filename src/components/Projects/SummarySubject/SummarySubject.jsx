import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography } from '@mui/material';

const SummarySubject = (props) => {
  const { topicName, content } = props;
  const isArray = Array.isArray(content);
  return(
    <Grid container item xs={12} direction={isArray ? 'column' : 'row'}>
      <Typography
        sx={{
          textDecoration: 'underline',
        }}
      >
        {topicName + ':'}
      </Typography>
      {isArray ? (
        <ul>
          {content.map((value, index) => {
          return(
            <li key={index}>
              <Typography>
                {value}
              </Typography>
            </li>
          );
        })}
        </ul>
      ) : (
        <>
          <Typography>
            &nbsp;
          </Typography>
          <Typography>
            {content}
          </Typography>
        </>
      )}
    </Grid>
  );
};

SummarySubject.propTypes = {
  topicName: PropTypes.string,
  content: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.string),
  ]),
};

export default SummarySubject;