import React from 'react';
import JobRole from './JobRole';

export default {
  title: 'Components/WorkExperience/JobRole',
  component: JobRole,
  argTypes: {
    jobRole: { control: 'text' },
    fontStyle: { control: 'text' },
  },
};

const Template = args => <JobRole {...args}/>;

export const JobRoleComponent = Template.bind({});
JobRoleComponent.args = {
  jobRole: 'Software Engineer',
  fontStyle: 'italic',
};