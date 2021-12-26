import React from 'react';
import TitleHeader from './SkillsTools';

export default {
  title: 'Components/SkillsTools',
  component: TitleHeader,
  argTypes: {
    backgroundColor: { control: 'color' },
    colorSubText: { control: 'color' },
  },
};

const Template = args => <TitleHeader {...args}/>;

export const SkillToolsSection = Template.bind({});
SkillToolsSection.args = {
  backgroundColor: '#f5f8fa',
  colorSubText: '#aaa',
};