import React from 'react';
import PropTypes from 'prop-types';
import { ListItem, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';
import { requireAtLeastOne } from '../../../../utils/propTypesUtils';

const MenuListItem = (props) => {
  const { to, name, setOpen, link } = props;
  if (link) {
    return(
      <ListItem button component={'a'} href={link} onClick={() => setOpen(false)} target='_blank' rel='nooopener'>
        <ListItemText primary={name} />
      </ListItem>
    );
  }
  return(
    <ListItem button component={Link} to={to} onClick={() => setOpen(false)}>
      <ListItemText primary={name} />
    </ListItem>
  );
};

const requireOne = requireAtLeastOne({
  to: PropTypes.string,
  link: PropTypes.string,
});

MenuListItem.propTypes = {
  to: requireOne,
  name: PropTypes.string.isRequired,
  setOpen: PropTypes.func.isRequired,
  link: requireOne,
};

export default MenuListItem;