import React from 'react';
import MenuPopup from './MenuPopup';

export default {
  title: 'Components/Header/MenuPopup',
  component: MenuPopup,
  argTypes: {
    menuName: { control: 'text' },
    menuSubItems: { control: 'object' },
  },
};

const Template = args => <MenuPopup {...args}/>;

export const MenuPopupComponent = Template.bind({});
MenuPopupComponent.args = {
  menuName: 'Projects',
  menuSubItems: [
    { id: 5, name: 'Software Engineering', to: 'software_engineering' },
    { id: 6, name: 'VR / AR', to: 'vr_ar' },
  ],
};