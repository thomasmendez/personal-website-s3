import React from 'react';
import SummarySubject from './SummarySubject';

export default {
  title: 'Components/SoftwareEngineeringProjects/SummarySubject',
  component: SummarySubject,
  argTypes: {
    topicName: { control: 'text' },
    content: { control: 'text' },
  },
};

const Template = args => <SummarySubject {...args}/>;

export const SummarySubjectComponent = Template.bind({});
SummarySubjectComponent.args = {
  topicName: 'Project Description',
  content: 'An open source learning management system intended for K-12 educational institutions',
};