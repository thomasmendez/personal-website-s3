import React from 'react';
import JobDescription from './JobDescription';

export default {
  title: 'Components/WorkExperience/JobDescription',
  component: JobDescription,
  argTypes: {
    arrayOfStrings: { control: 'array' },
  },
};

const Template = args => <JobDescription {...args}/>;

export const JobDescriptionComponent = Template.bind({});
JobDescriptionComponent.args = {
  arrayOfStrings: [
    'Works with team through full software development life cycle in order to deliver quarterly features and deliverables based on customer needs',
    'Focused on delivering front-end research, design, and features for internal team product',
    'Created Python package intended to report non-inclusive words present in a directory and suggest alternative words',
  ],
};