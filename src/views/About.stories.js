import React from 'react';
import About from './About';

export default {
  title: 'Views/About',
  component: About,
  argTypes: {
    backgroundColor: { control: 'color' }, // Color controls will be detected automatically
  },
  parameters: {
    applyColorTo: ['label'], // Must match argType key
  },
};

const Template = args => <About {...args}/>;

export const AboutView = Template.bind({});