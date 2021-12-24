import React from 'react';
import Header from './Header';

export default {
  title: 'Components/Header',
  component: Header,
  argTypes: {
    backgroundColor: { control: 'color' }, // Color controls will be detected automatically
    label: { control: 'text' }, // Text controls may be added as extra
    text: { control: 'text' }, // Text controls may be added as extra
  },
  parameters: {
    applyColorTo: ['label'], // Must match argType key
  },
};

const Template = args => <Header {...args}/>;

export const Navigation = Template.bind({});