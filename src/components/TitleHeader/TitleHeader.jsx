import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@mui/styles';
import { Grid, Box, Typography } from '@mui/material';

import ProfilePic from '../../assets/pic.jpeg';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

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
  bold: {
    fontWeight: 600,
  },
  noTextDecoration: {
    textDecoration: 'none',
    color: 'black',
    //hover: false,
    '&:hover': {
      color: '#800080',
    },
  },
});

const ContactMethod = (props) => {
  const { contactMethodName, icon, hrefLink } = props;
  const useStyles = makeStyles({
    noTextDecoration: {
      textDecoration: 'none',
      color: 'black',
      '&:hover': {
        color: '#800080',
      },
    },
  });
  const classes = useStyles();
  return(
    <Grid container item xs={12}>
      <Grid item xs={1} className={classes.noTextDecoration} component='a' target="_blank" href={hrefLink}>
        {icon}
      </Grid>
      <Grid item xs={11}>
        <Typography className={classes.noTextDecoration} component='a' target="_blank" href={hrefLink}>
          {contactMethodName}
        </Typography>
      </Grid>
    </Grid>
  );
};

ContactMethod.propTypes = {
  contactMethodName: PropTypes.string,
  icon: PropTypes.element,
  hrefLink: PropTypes.string,
};

const TitleHeader = () => {
  const classes = useStyles();
  return(
    <Grid
      container
      spacing={3}
    >
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
      <Grid container item spacing={8}>
        <Grid item sm={3} />
        <Grid container item sm={4} spacing={3}>
          <Grid item>
            <Typography variant="h5">
              About Me
            </Typography>
          </Grid>
          <Grid item>
            <Typography>
              I am a passionate software engineer who loves to solve real world problems using new unexplored technologies.
              I enjoy developing good user experiences, wether it be for desktop, mobile, or video games.
              Always looking forward to working on the next big project.
            </Typography>
          </Grid>
          <Grid item>
            <Typography>
              EDUCATION
            </Typography>
          </Grid>
          <Grid item>
            <Typography>
              Bachelor of Science in Arts and Entertainment Technologies, at The University of Texas at Austin
              August 2016 - May 2018
            </Typography>
          </Grid>
        </Grid>
        <Grid container item sm={3}>
          <Grid item xs={12}>
            <Typography variant="h5">
              Contact
            </Typography>
          </Grid>
          <ContactMethod
            contactMethodName='LinkedIn'
            icon={<LinkedInIcon />}
            hrefLink='https://www.linkedin.com/in/thomas-a-mendez'
          />
          <ContactMethod
            contactMethodName='Github'
            icon={<GitHubIcon />}
            hrefLink='https://github.com/thomasmendez'
          />
          <ContactMethod
            contactMethodName='Email'
            icon={<EmailIcon />}
            hrefLink='mailto:thomasmendez01@gmail.com'
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default TitleHeader;