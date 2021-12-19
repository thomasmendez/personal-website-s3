import React from 'react';
import { makeStyles } from '@mui/styles';
import { Grid, Box, Typography } from '@mui/material';

import ProfilePic from '../../assets/pic.jpeg';

const useStyles = makeStyles({
  centerItems: {
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  lightBackground: {
    backgroundColor: '#f5f8fa',
  },
  roundedImage: {
    borderRadius: '50%',
  },
  lightText: {
    color: '#aaa',
  },
});

const TitleHeader = () => {
  const classes = useStyles();
  return(
    <Grid
      container
      item
      className={classes.lightBackground}
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      spacing={3}
      pb={5}
    >
      <Grid item xs={12}>
        <Box borderRadius="50%">
          <img className={classes.roundedImage} src={ProfilePic} alt="100x100" />
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Grid item>
          <Typography variant="h4" display="block">
            Thomas A Mendez
          </Typography>
        </Grid>
        <Grid item>
          <Typography className={classes.lightText} variant="h5">
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