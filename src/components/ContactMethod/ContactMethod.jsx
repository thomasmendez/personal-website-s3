import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography } from '@mui/material';
import IconLink from '../IconLink';

const ContactMethod = (props) => {
  const { direction, contactMethodName, icon, hrefLink, textDecoration, color, hoverColor } = props;
  if (direction === 'column') {
    return(
      <Grid container item spacing={1}>
        <Grid item>
          <IconLink
            icon={icon}
            hrefLink={hrefLink}
            textDecoration={textDecoration}
            color={color}
            hoverColor={hoverColor}
          />
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
  } else {
    return(
      <IconLink
        icon={icon}
        hrefLink={hrefLink}
        textDecoration={textDecoration}
        color={color}
        hoverColor={hoverColor}
      />
    );
  }
  
};

ContactMethod.defaultProps = {
  textDecoration: 'none',
  color: 'black',
  hoverColor: '#800080',
};
  
ContactMethod.propTypes = {
  direction: PropTypes.string,
  contactMethodName: PropTypes.string,
  icon: PropTypes.element,
  hrefLink: PropTypes.string,
  textDecoration: PropTypes.string,
  color: PropTypes.string,
  hoverColor: PropTypes.string,
};

export default ContactMethod;