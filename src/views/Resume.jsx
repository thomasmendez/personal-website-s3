import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@mui/material';
import ResumePdf from '../assets/ResumeThomasMendez.pdf';
import useWindowDimensions from '../utils/windowDimensions';

const Resume = (props) => {
  useEffect(() => document.title = props.title, [props.title]);
  const { width, height } = useWindowDimensions();
  const pdfHeight = height * 0.75;
  return(
    <Grid container justifyContent="center">
      <Grid item sx={{height: pdfHeight}}>
        <object data={ResumePdf} type="application/pdf" width={width} height={pdfHeight}>
          <a href={ResumePdf}>
            Download Resume
          </a>
        </object>
      </Grid>
    </Grid>
  );
};

Resume.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Resume;