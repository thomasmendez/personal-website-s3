import React from 'react';
import PropTypes from 'prop-types';
import { 
  AppBar, Toolbar, Typography, Box,
} from '@mui/material';
import useWindowDimensions from '../../utils/windowDimensions';

import RouteButton from './RouteButton';
import MenuPopup from './MenuPopup/MenuPopup';
import MenuDrawer from './MenuDrawer';

const MAX_WIDTH_FOR_NAV = 992;

const Header = (props) => {
  const { backgroundColor, routes } = props;
  const { width } = useWindowDimensions();
  return(
    <Box sx={{ flexGrow: 1 }} pb={3}>
      <AppBar position="fixed" style={{ backgroundColor: backgroundColor }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1}}>
            Thomas A. Mendez
          </Typography>
          {width > MAX_WIDTH_FOR_NAV ? (
            <>
              {routes.map((object) => (
                <div key={object.id}>
                  {object.subItems != null ? (
                    <MenuPopup menuName={object.name} menuSubItems={object.subItems} />
                ) : (
                  <RouteButton key={object.id} to={object.to} link={object.link}>
                    {object.name}
                  </RouteButton>
                )}
                </div>
            ))}
            </>
        ) : (
          <MenuDrawer routes={routes} />
        )}
        </Toolbar>
      </AppBar>
      <Toolbar />
    </Box>
  );
};

Header.defaultProps = {
  routes: [],
};

Header.propTypes = {
  backgroundColor: PropTypes.string,
  routes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      to: PropTypes.string,
      subItems: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          name: PropTypes.string.isRequired,
          to: PropTypes.string.isRequired,
        }),
      ),
    }),
  ),
};

export default Header;
