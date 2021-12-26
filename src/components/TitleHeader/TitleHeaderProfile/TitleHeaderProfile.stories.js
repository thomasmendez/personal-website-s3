import React from 'react';
import TitleHeader from './TitleHeaderProfile';

export default {
  title: 'Components/TitleHeader/TitleHeaderProfile',
  component: TitleHeader,
  argTypes: {
    backgroundColor: { control: 'color' },
    colorSubText: { control: 'color' },
  },
};

const Template = args => <TitleHeader {...args}/>;

export const TitleHeaderProfileStory = Template.bind({});
TitleHeaderProfileStory.args = {
  backgroundColor: '#f5f8fa',
  colorSubText: '#aaa',
};