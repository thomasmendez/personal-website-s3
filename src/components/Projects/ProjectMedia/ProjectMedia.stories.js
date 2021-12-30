import React from 'react';
import ProjectMedia from './ProjectMedia';
import video from '../../../assets/open-lms-blended-sample.mp4';

export default {
  title: 'Components/Projects/ProjectMedia',
  component: ProjectMedia,
  argTypes: {
    media: {
      control: { type: 'select' },
      options: [video, 'secondary'],
    },
    mediaAlt: { control: 'text' },
    mediaTitle: { control: 'text' },
    mediaDescription: { control: 'text' },
    repository: { control: 'text' },
    youTubeLink: { control: 'text' },
    downloadLink: { control: 'text' },
  },
};

const Template = args => <ProjectMedia {...args}/>;

export const ProjectMediaComponent = Template.bind({});
ProjectMediaComponent.args = {
  media: video,
  mediaAlt: 'Open-LMS-Blended Video',
  mediaTitle: 'Open-LMS-Blended Features',
  mediaDescription: 'A user is able to create an account, create a course, and upload/manage their syllabus, assignments, class schedule, and lectures. They can also manage their account such as their email, semester, password, or delete their account. Any viewer can view any created courses along with uploaded files.',
  repository: 'https://github.com/thomasmendez/open-lms-blended',
};