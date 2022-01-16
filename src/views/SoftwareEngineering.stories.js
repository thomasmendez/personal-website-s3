import React from 'react';
import SoftwareEngineering from './SoftwareEngineering';

export default {
  title: 'Views/SoftwareEngineering',
  component: SoftwareEngineering,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  parameters: {
    applyColorTo: ['label'],
  },
};

const Template = args => <SoftwareEngineering {...args}/>;

export const SoftwareEngineeringView = Template.bind({});