import React from 'react';
import ProjectSummary from './ProjectSummary';

export default {
  title: 'Components/Projects/ProjectSummary',
  component: ProjectSummary,
  argTypes: {
    description: { control: 'text' },
    myRole: { control: 'text' },
    myTasks: { control: 'array' },
    teamSize: { control: 'number' },
    cloudServices: { control: 'array' },
    tools: { control: 'array' },
    projectDuration: { control: 'text' },
    date: { control: 'object' },
    note: { control: 'text' },
    fontStyleNote: { control: 'text' },
  },
};

const Template = args => <ProjectSummary {...args}/>;

export const ProjectSummaryComponent = Template.bind({});
ProjectSummaryComponent.args = {
  description: 'An open source learning management system intended for K-12 educational institutions.',
  myRole: 'Software Engineer',
  myTasks: [
    'Developed an open source LMS intended for K-12 educational institutions using the MERN stack',
    'Experienced the entire development lifecycle, deployed, and documented the entire application for both Digital Ocean and AWS',
  ],
  teamSize: 1,
  cloudServices: [
    'AWS',
    'Digital Ocean',
  ],
  tools: [
    'MongoDB',
    'Express',
    'React',
    'Node.js',
  ],
  projectDuration: '3 Months',
  date: {
    startDate: 'March 2020',
    endDate: 'May 2020',
  },
  note: 'This site is no longer avaliable as of May 2021. The site was only intended to be avaliable for a year for demo purposes.',
};