import React from 'react';
import RouteButton from './RouteButton';

export default {
  title: 'Components/Header/RouteButton',
  component: RouteButton,
  argTypes: {
    to: { control: 'text' },
    children: { control: 'text' },
  },
};

const Template = args => <RouteButton {...args}/>;

export const RouteButtonStory = Template.bind({});
RouteButtonStory.args = {
  to: 'about',
  children: 'About',
};