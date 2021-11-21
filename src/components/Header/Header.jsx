import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
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
  <Button color="inherit" component={Link} to={to} {...props}>
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
        <LinkNoDecoration to="/software_engineering">
          <MenuItem>
            Software Engineering
          </MenuItem>
        </LinkNoDecoration>

        <LinkNoDecoration to="/vr_ar">
          <MenuItem>
            VR / AR
          </MenuItem>
        </LinkNoDecoration>
      </Menu>
    </>
  );
};

const Header = () => (
  <AppBar style={{ backgroundColor: 'gray' }}>
    <Toolbar>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        Thomas A. Mendez
      </Typography>

      <RouteButton to="about">
        About
      </RouteButton>

      <RouteButton to="work">
        Work
      </RouteButton>

      <RouteButton to="skills">
        Skills &#38; Tools
      </RouteButton>

      <MenuPopupState />

      <RouteButton to="resume">
        Resume
      </RouteButton>
    </Toolbar>
  </AppBar>
);

export default Header;
