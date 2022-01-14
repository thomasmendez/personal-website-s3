import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { 
  Button, Drawer, Box,
  List, ListItem, ListItemText, Divider, Collapse,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import MenuListItem from './MenuListItem';

const MenuDrawer = (props) => {
  const { routes } = props;
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState({
    'Projects': false,
  });
  return(
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
            {routes.map((item) => (
              <div key={item.id}>
                {item.subItems != null ? (
                  <>
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
                              <MenuListItem key={subItem.id} to={subItem.to} name={subItem.name} setOpen={setOpen} link={subItem.link} />
                            );
                          },
                        )}
                      </List>
                    </Collapse>
                  </>
              ) : (
                <MenuListItem to={item.to} name={item.name} setOpen={setOpen} link={item.link} />
              )}
                <Divider />
              </div>
          ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

MenuDrawer.defaultProps = {
  routes: [],
};

MenuDrawer.propTypes = {
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

export default MenuDrawer;