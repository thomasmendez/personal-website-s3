import React from 'react';
import ProjectMedia from './ProjectMedia';
import video from '../../../assets/open-lms-blended-sample.mp4';

export default {
  title: 'Components/SoftwareEngineeringProjects/ProjectMedia',
  component: ProjectMedia,
  argTypes: {
    media: {
      control: { type: 'select' },
      options: [video, 'secondary'],
    },
    mediaAlt: { control: 'text'},
  },
};

const Template = args => <ProjectMedia {...args}/>;

export const ProjectMediaComponent = Template.bind({});
ProjectMediaComponent.args = {
  media: video,
  mediaAlt: 'Open-LMS-Blended Video',
};