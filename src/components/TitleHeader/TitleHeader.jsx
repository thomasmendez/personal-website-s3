import React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/system';
import { Grid, Box, Typography } from '@mui/material';
import ProfilePic from '../../assets/pic.jpeg';

const StyledImg = styled('img', {
  name: 'StyledImg',
  slot: 'Wrapper',
})({
  borderRadius: '50%',
});

const TitleHeader = (props) => {
  const { backgroundColor, colorSubText } = props;
  return(
    <Grid
      container
      item
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      spacing={3}
      pb={5}
      sx={{ backgroundColor: backgroundColor }}
    >
      <Grid item xs={12}>
        <Box borderRadius="50%">
          <StyledImg src={ProfilePic} alt="100x100"/>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Grid item>
          <Typography variant="h4" display="block">
            Thomas A Mendez
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h5"
            sx={{ color: colorSubText }}
          >
            Software Engineer
            <br />
            and Game Developer
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

TitleHeader.defaultProps = {
  backgroundColor: '#f5f8fa',
  colorSubText: '#aaa',
};

TitleHeader.propTypes = {
  backgroundColor: PropTypes.string,
  colorSubText: PropTypes.string,
};

export default TitleHeader;