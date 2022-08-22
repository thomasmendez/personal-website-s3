import React from 'react';
import PropTypes from 'prop-types';
import { Typography, Box } from '@mui/material';

const FooterLinks = (props) => {
  const { hrefLink, textDecoration, color, hoverColor, text, img } = props;
  return (
    <>
      <Typography component='a' target="_blank" href={hrefLink}
        sx={{
          textDecoration: textDecoration,
          color: color,
          '&:hover': {
            color: hoverColor,
          },
        }}
      >
        {text}
      </Typography>
      <Box
        component="img"
        sx={{
          pl: 1,
          display: 'flex-inline',
          maxHeight: { xs: 25 },
          maxWidth: { xs: 25 },
        }}
        alt="icon"
        src={img}
      />
    </>
  );
};

FooterLinks.defaultProps = {
  textDecoration: 'none',
  color: 'black',
  hoverColor: '#800080',
};

FooterLinks.propTypes = {
  hrefLink: PropTypes.string,
  textDecoration: PropTypes.string,
  color: PropTypes.string,
  hoverColor: PropTypes.string,
  text: PropTypes.string,
  img: PropTypes.element,
};

export default FooterLinks;