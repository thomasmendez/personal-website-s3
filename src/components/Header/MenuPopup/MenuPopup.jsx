import React from 'react';
import PropTypes from 'prop-types';
import { Button, Menu, MenuItem } from '@mui/material';
import { usePopupState, bindTrigger, bindMenu } from 'material-ui-popup-state/hooks';
import { Link } from 'react-router-dom';

const MenuPopup = (props) => {
  const { menuName, menuSubItems } = props;
  const popupState = usePopupState({ variant: 'popover', popupId: 'menuPopup' });
  if (menuSubItems.length > 0) {
    return(
      <>
        <Button color="inherit" {...bindTrigger(popupState)}>
          {menuName}
        </Button>
        <Menu {...bindMenu(popupState)}>
          {menuSubItems.map((menuItem) => (
            <div key={menuItem.id}>
              <MenuItem component={Link} to={menuItem.to} onClick={popupState.close}>
                {menuItem.name}
              </MenuItem>
            </div>
          ))}
        </Menu>
      </>
    );
  }
  return null;
};

MenuPopup.propTypes = {
  menuName: PropTypes.string.isRequired,
  menuSubItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      to: PropTypes.string.isRequired,
    }),
  ),
};


export default MenuPopup;