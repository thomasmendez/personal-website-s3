import React from 'react';
import PropTypes from 'prop-types';
// import { styled } from '@mui/system';
import { Grid, Typography } from '@mui/material';

// const StyledGrid = styled(Grid, {
//   name: 'StyledGrid',
//   slot: 'Wrapper',
// })({
//   textDecoration: 'none',
//   color: 'black',
//   '&:hover': {
//     color: '#800080',
//   },
// });

const ContactMethod = (props) => {
  const { contactMethodName, icon, hrefLink, textDecoration, color, hoverColor } = props;
  return(
    <Grid container item spacing={1}>
      <Grid item component='a' target="_blank" href={hrefLink}
        sx={{
          textDecoration: textDecoration,
          color: color,
          '&:hover': {
            color: hoverColor,
          },
        }}
      >
        {icon}
      </Grid>
      <Grid item>
        <Typography component='a' target="_blank" href={hrefLink}
          sx={{
            textDecoration: textDecoration,
            color: color,
            '&:hover': {
              color: hoverColor,
            },
          }}
        >
          {contactMethodName}
        </Typography>
      </Grid>
    </Grid>
  );
};

ContactMethod.defaultProps = {
  textDecoration: 'none',
  color: 'black',
  hoverColor: '#800080',
};
  
ContactMethod.propTypes = {
  contactMethodName: PropTypes.string,
  icon: PropTypes.element,
  hrefLink: PropTypes.string,
  textDecoration: PropTypes.string,
  color: PropTypes.string,
  hoverColor: PropTypes.string,
};

export default ContactMethod;