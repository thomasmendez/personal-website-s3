import React from 'react';
import TitleHeader from './TitleHeader';

export default {
  title: 'Components/TitleHeader',
  component: TitleHeader,
  argTypes: {
    backgroundColor: { control: 'color' }, // Color controls will be detected automatically
    label: { control: 'text' }, // Text controls may be added as extra
    text: { control: 'text' }, // Text controls may be added as extra
  },
  parameters: {
    applyColorTo: ['label'], // Must match argType key
  },
};

const Template = args => <TitleHeader {...args}/>;

export const TitleHeaderStory = Template.bind({});