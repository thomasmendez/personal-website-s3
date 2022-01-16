import React from 'react';
import AboutMe from './AboutMe';

export default {
  title: 'Components/About/AboutMe',
  component: AboutMe,
  argTypes: {
    fontWeight: { control: 'number' },
  },
};

const Template = args => <AboutMe {...args}/>;

export const AboutMeSection = Template.bind({});
AboutMeSection.args = {
  fontWeight: 600,
};