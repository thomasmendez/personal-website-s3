import React from 'react';
import AboutMe from './AboutMe';

export default {
  title: 'Components/AboutMe',
  component: AboutMe,
  argTypes: {
    backgroundColor: { control: 'color' }, // Color controls will be detected automatically
  },
};

const Template = args => <AboutMe {...args}/>;

export const AboutMeSection = Template.bind({});