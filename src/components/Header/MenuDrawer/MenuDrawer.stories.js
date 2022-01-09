import React from 'react';
import MenuDrawer from './MenuDrawer';

export default {
  title: 'Components/Header/MenuDrawer',
  component: MenuDrawer,
  argTypes: {
    routes: { control: 'object' },
  },
  parameters: {
    applyColorTo: ['label'],
  },
};

const Template = args => <MenuDrawer {...args}/>;

export const MenuDrawerComponent = Template.bind({});
MenuDrawerComponent.args = {
  routes: [
    { id: 1, name: 'About', to: 'about' }, 
    { id: 2, name: 'Work', to: 'work' },
    { id: 3, name: 'Skills & Tools', to: 'skillsTools' },
    { id: 4, name: 'Projects', subItems: [
      { id: 5, name: 'Software Engineering', to: 'softwareEngineering' },
      { id: 6, name: 'VR / AR', to: 'vrar' },
    ]},
    { id: 7, name: 'Resume', to: 'resume'},
  ],
};