import React from 'react';
import SkillsTools from './SkillsTools';

export default {
  title: 'Views/SkillsTools',
  component: SkillsTools,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  parameters: {
    applyColorTo: ['label'],
  },
};

const Template = args => <SkillsTools {...args}/>;

export const SkillsToolsView = Template.bind({});

SkillsToolsView.args = {
  title: 'Skills & Tools | Thomas A. Mendez',
};