import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography } from '@mui/material';
import useWindowDimensions from '../../utils/windowDimensions';
import { BREAKPOINTSTORYBOOKSMALLMOBILEL } from '../../utils/breakpoints';
import ContactMethod from '../ContactMethod';
import FooterLinks from './FooterLinks';
import reactImg from '../../assets/react.png';
import vueImg from '../../assets/vue.jpg';

const Footer = (props) => {
  const { contacts } = props;
  const { width } = useWindowDimensions();
  return (
    <Grid container sx={{ borderTop: 'solid 1px gray' }} mt={3} pt={3} pb={3} direction="row" justifyContent="flex-end" alignItems="center">
      <Grid item xs={2} sm={2} />
      <Grid item xs={2} sm={1}>
        <Typography>
          ©
          {' '}
          {new Date().getFullYear()}
          {' '}
          Copyright
        </Typography>
      </Grid>
      <Grid container item justifyContent="center" xs={3} sm={6}>
        <Grid item justifyContent="center" display={width > BREAKPOINTSTORYBOOKSMALLMOBILEL && 'flex'} xs={12}>
          <FooterLinks
            hrefLink='thomasamendez.com'
            img={reactImg}
            text='Created with React!'
          />
        </Grid>
        <Grid item justifyContent="center" display={width > BREAKPOINTSTORYBOOKSMALLMOBILEL && 'flex'} xs={12}>
          <FooterLinks
            hrefLink='vue.thomasamendez.com'
            img={vueImg}
            text='Check out the Vue version!'
          />
        </Grid>
      </Grid>
      <Grid container item xs={3} sm={3} direction="row" spacing={1}>
        {contacts.map((contact, index) => (
          <ContactMethod
            key={index}
            direction='row'
            contactMethodName={contact.contactMethod}
            icon={contact.icon}
            hrefLink={contact.hrefLink}
          />
        ))}
      </Grid>
      <Grid item xs={2} sm={0} />
    </Grid>
  );
};

Footer.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      contactMethod: PropTypes.string.isRequired,
      icon: PropTypes.element.isRequired,
      hrefLink: PropTypes.string.isRequired,
    }),
  ),
};

export default Footer;