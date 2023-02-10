import React from 'react';
import VRAR from './VRAR';

export default {
  title: 'Views/VRAR',
  component: VRAR,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  parameters: {
    applyColorTo: ['label'],
  },
};

const Template = args => <VRAR {...args}/>;

export const VRARView = Template.bind({});

VRARView.args = {
  title: 'AR & VR | Thomas A. Mendez',
};