import React from 'react';
import WorkExperience from './WorkExperience';

export default {
  title: 'Components/WorkExperience',
  component: WorkExperience,
  argTypes: {
    arrayOfExperiences: { control: 'object' },
  },
};

const Template = args => <WorkExperience {...args}/>;

export const WorkExperienceStory = Template.bind({});
WorkExperienceStory.args = {
  arrayOfExperiences: [
    {
      jobTitle: 'Associate Software Engineer',
      company: 'T-Mobile',
      location: {
        city: 'Frisco',
        state: 'TX',
      },
      date: {
        startDate: 'August 2020',
        endDate: 'Present',
      },
      jobRole: 'Software Engineer',
      jobDescription: [
        'Works with team through full software development life cycle in order to deliver quarterly features and deliverables based on customer needs',
        'Focused on delivering front-end research, design, and features for internal team product',
        'Created Python package intended to report non-inclusive words present in a directory and suggest alternative words',
      ],
    },
  ],
};