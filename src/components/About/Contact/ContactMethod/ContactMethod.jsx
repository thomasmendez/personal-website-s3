import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@mui/styles';
import { Grid, Typography } from '@mui/material';

const useStyles = makeStyles({
  noTextDecoration: {
    textDecoration: 'none',
    color: 'black',
    '&:hover': {
      color: '#800080',
    },
  },
});

const ContactMethod = (props) => {
  const { contactMethodName, icon, hrefLink } = props;
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

export default ContactMethod;