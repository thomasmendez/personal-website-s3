import React from 'react';
import { AppBar, Toolbar, Typography, Button, Menu, MenuItem, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import {
  usePopupState,
  bindTrigger,
  bindMenu,
} from 'material-ui-popup-state/hooks';

const LinkNoDecoration = ({ to, children }) => (
  <Link
    to={to}
    style={{
      textDecoration: 'none', display: 'block', color: 'black', hover: false,
    }}
  >
    {children}
  </Link>
);

const RouteButton = ({ to, props, children }) => (
  <Button color='inherit' component={Link} to={to} {...props}>
    {children}
  </Button>
);

const MenuPopupState = () => {
  const popupState = usePopupState({ variant: 'popover', popupId: 'demoMenu' });
  return (
    <>
      <Button color="inherit" {...bindTrigger(popupState)}>
        Projects
      </Button>

      <Menu {...bindMenu(popupState)}>
        <LinkNoDecoration to="software_engineering">
          <MenuItem>
            Software Engineering
          </MenuItem>
        </LinkNoDecoration>
        <LinkNoDecoration to="vr_ar">
          <MenuItem>
            VR / AR
          </MenuItem>
        </LinkNoDecoration>
      </Menu>
    </>
  );
};

const Header = () => {
  return(
    <AppBar position="static" style={{ backgroundColor: 'gray' }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1}}>
          Thomas A. Mendez
        </Typography>

        <RouteButton to="about">
          About
        </RouteButton>

        <RouteButton to="work">
          Work
        </RouteButton>

        <RouteButton to="skills_tools">
          Skills &#38; Tools
        </RouteButton>

        <MenuPopupState />

        <RouteButton to="resume">
          Resume
        </RouteButton>
      </Toolbar>
    </AppBar>
    // <Box sx={{ flexGrow: 1 }}>
    //   <AppBar position="static">
    //     <Toolbar>
    //       <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
    //         News
    //       </Typography>
    //       <Button color="inherit">
    //         Login
    //       </Button>
    //     </Toolbar>
    //   </AppBar>
    // </Box>
  );
};

export default Header;
