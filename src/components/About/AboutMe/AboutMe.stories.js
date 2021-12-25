import React from 'react';
import AboutMe from './AboutMe';

export default {
  title: 'Components/About/AboutMe',
  component: AboutMe,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = args => <AboutMe {...args}/>;

export const AboutMeSection = Template.bind({});