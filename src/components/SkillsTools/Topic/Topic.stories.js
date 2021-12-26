import React from 'react';
import Topic from './Topic';

export default {
  title: 'Components/SkillsTools/Topic',
  component: Topic,
  argTypes: {
    topicName: { control: 'text' },
  },
};

const Template = args => <Topic {...args}/>;

export const SkillToolsTopicSection = Template.bind({});
SkillToolsTopicSection.args = {
  topicName: 'Skills',
};