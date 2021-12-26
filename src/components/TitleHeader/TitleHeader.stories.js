import React from 'react';
import TitleHeader from './TitleHeader';

export default {
  title: 'Components/TitleHeader',
  component: TitleHeader,
  argTypes: {
    backgroundColor: { control: 'color' },
    colorSubText: { control: 'color' },
    titleName: { control: 'text' },
  },
};

const Template = args => <TitleHeader {...args}/>;

export const TitleHeaderStory = Template.bind({});
TitleHeaderStory.args = {
  backgroundColor: '#f5f8fa',
  colorSubText: 'black',
  titleName: 'Skills & Tools',
};