import React from 'react';
import PropTypes from 'prop-types';
import { ListItem, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';

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

MenuListItem.propTypes = {
  to: PropTypes.string,
  name: PropTypes.string.isRequired,
  setOpen: PropTypes.func.isRequired,
  link: PropTypes.string,
};

export default MenuListItem;