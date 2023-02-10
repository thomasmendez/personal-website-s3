import React from 'react';
import Work from './Work';

export default {
  title: 'Views/Work',
  component: Work,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = args => <Work {...args}/>;

export const WorkView = Template.bind({});

WorkView.args = {
  title: 'Work | Thomas A. Mendez',
};