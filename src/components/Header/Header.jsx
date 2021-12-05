import React, { useState } from 'react';
import { 
  AppBar, Toolbar, Typography, Button, Menu, MenuItem, Drawer, Box,
  List, ListItem, ListItemText, Divider, Collapse,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { Link } from 'react-router-dom';
import {
  usePopupState,
  bindTrigger,
  bindMenu,
} from 'material-ui-popup-state/hooks';
import useWindowDimensions from '../../utils/windowDimensions';

const MAX_WIDTH_FOR_NAV = 992;

const ROUTES = [
  { id: '1', name: 'About', to: 'about' }, 
  { id: '2', name: 'Work', to: 'work' },
  { id: '3', name: 'Skills & Tools', to: 'skills_tools' },
  { id: '4', name: 'Projects', subItems: [
    { id: '5', name: 'Software Engineering', to: 'software_engineering' },
    { id: '6', name: 'VR / AR', to: 'vr_ar' },
  ]},
  { id: '7', name: 'Resume', to: 'resume'},
];

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

const Header = (props) => {
  const { backgroundColor } = props;
  const { width } = useWindowDimensions();
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState({
    'Projects': false,
  });
  return(
    <AppBar position="static" style={{ backgroundColor: backgroundColor }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1}}>
          Thomas A. Mendez
        </Typography>
        {width > MAX_WIDTH_FOR_NAV ? (
          <>
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
          </>
        ) : (
          <>
            <Button
              color="inherit"
              edge="start"
              startIcon={<MenuIcon />}
              onClick={() => setOpen(true)}
            />
            <Drawer
              anchor={'top'}
              open={open}
              onClose={() => setOpen(false)}
            >
              <Box role="presentation">
                <List>
                  {ROUTES.map((item) => (
                    <div key={item.id}>
                      {item.subItems != null ? (
                        <div>
                          <ListItem
                            button
                            onClick={() => setExpanded({
                              ...expanded,
                              [item.name]: !expanded[item.name],
                            })}
                          >
                            <ListItemText primary={item.name} />
                            {expanded[item.name] ? (
                              <ExpandLessIcon />
                            ) : (
                              <ExpandMoreIcon />
                            )}
                          </ListItem>
                          <Collapse
                            key={item.id}
                            component="li"
                            in={expanded[item.name]}
                            timeout="auto"
                            unmountOnExit
                          >
                            <List disablePadding>
                              {item.subItems.map(
                                subItem => {
                                  return (
                                    <ListItem
                                      button
                                      key={subItem.id}
                                      component={Link}
                                      to={subItem.to}
                                      onClick={() => setOpen(false)}
                                    >
                                      <ListItemText
                                        key={subItem.id}
                                        primary={subItem.name}
                                      />
                                    </ListItem>
                                  );
                                },
                              )}
                            </List>
                          </Collapse>
                        </div>
                      ) : (
                        <div>
                          <ListItem button component={Link} to={item?.to ? item.to : 'error'} onClick={() => setOpen(false)}>
                            <ListItemText primary={item.name} />
                          </ListItem>
                        </div>
                      )}
                      <Divider />
                    </div>
                  ))}
                </List>
              </Box>
            </Drawer>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
