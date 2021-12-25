import React from 'react';
import Header from './Header';

export default {
  title: 'Components/Header',
  component: Header,
  argTypes: {
    backgroundColor: { control: 'color' },
    routes: { control: 'object' },
  },
  parameters: {
    applyColorTo: ['label'],
  },
};

const Template = args => <Header {...args}/>;

export const Navigation = Template.bind({});
Navigation.args = {
  backgroundColor: 'grey',
  routes: [
    { id: 1, name: 'About', to: 'about' }, 
    { id: 2, name: 'Work', to: 'work' },
    { id: 3, name: 'Skills & Tools', to: 'skills_tools' },
    { id: 4, name: 'Projects', subItems: [
      { id: 5, name: 'Software Engineering', to: 'software_engineering' },
      { id: 6, name: 'VR / AR', to: 'vr_ar' },
    ]},
    { id: 7, name: 'Resume', to: 'resume'},
  ],
};