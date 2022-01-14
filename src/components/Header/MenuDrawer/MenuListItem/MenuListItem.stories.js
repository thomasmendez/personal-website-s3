import React from 'react';
import MenuListItem from './MenuListItem';

export default {
  title: 'Components/Header/MenuDrawer/MenuListItem',
  component: MenuListItem,
  argTypes: {
    to: { control: 'text' },
    name: { control: 'text' },
  },
  parameters: {
    applyColorTo: ['label'],
  },
};

const Template = args => <MenuListItem {...args}/>;

export const MenuListItemComponent = Template.bind({});
MenuListItemComponent.args = {
  to: 'about',
  name: 'About',
  setOpen: () => { return false; } ,
};
