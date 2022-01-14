import React from 'react';
import Resume from './Resume';

export default {
  title: 'Views/Resume',
  component: Resume,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = args => <Resume {...args}/>;

export const ResumeView = Template.bind({});