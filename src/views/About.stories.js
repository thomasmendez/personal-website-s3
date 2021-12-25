import React from 'react';
import About from './About';

export default {
  title: 'Views/About',
  component: About,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  parameters: {
    applyColorTo: ['label'],
  },
};

const Template = args => <About {...args}/>;

export const AboutView = Template.bind({});