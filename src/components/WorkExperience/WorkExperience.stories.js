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
        'Prototyped persistent world-scale augmented reality using ARCore and ARKit',
        'Prototyped Instagram like gestures for 3D object/text manipulation in ARKit',
        'Worked with various Android and iOS libraries to develop features involving storage, sensors, geolocation, camera, and visual mapping',
        'Designed and documented reusable modules for Android and iOS prototypes using MVC architecture',
        'Used agile methodology and rapid prototyping practices',
      ],
    },
  ],
};