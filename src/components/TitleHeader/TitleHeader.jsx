import React from 'react';
import { styled } from '@mui/system';
import { Grid, Box, Typography } from '@mui/material';
import ProfilePic from '../../assets/pic.jpeg';

const StyledImg = styled('img', {
  name: 'StyledImg',
  slot: 'Wrapper',
})({
  borderRadius: '50%',
});

const TitleHeader = () => {
  return(
    <Grid
      container
      item
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      spacing={3}
      pb={5}
      sx={{ backgroundColor: '#f5f8fa' }}
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
            sx={{ color: '#aaa' }}
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

export default TitleHeader;