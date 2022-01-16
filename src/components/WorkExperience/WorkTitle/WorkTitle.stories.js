import React from 'react';
import WorkTitle from './WorkTitle';

export default {
  title: 'Components/WorkExperience/WorkTitle',
  component: WorkTitle,
  argTypes: {
    jobTitle: { control: 'text' },
    fontWeight: { control: 'number' },
    company: { control: 'text' },
    fontStyle: { control: 'text' },
    location: { control: 'object' },
  },
};

const Template = args => <WorkTitle {...args}/>;

export const WorkTitleComponent = Template.bind({});
WorkTitleComponent.args = {
  jobTitle: 'Associate Software Engineer',
  fontWeight: 600,
  company: 'T-Mobile',
  fontStyle: 'italic',
  location: {
    city: 'Frisco',
    state: 'TX',
  },
};