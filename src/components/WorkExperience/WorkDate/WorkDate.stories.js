import React from 'react';
import WorkDate from './WorkDate';

export default {
  title: 'Components/WorkExperience/WorkDate',
  component: WorkDate,
  argTypes: {
    fontWeight: { control: 'number' },
    date: { control: 'object' },
  },
};

const Template = args => <WorkDate {...args}/>;

export const WorkDateComponent = Template.bind({});
WorkDateComponent.args = {
  fontWeight: 600,
  date: {
    startDate: 'August 2020',
    endDate: 'Present',
  },
};