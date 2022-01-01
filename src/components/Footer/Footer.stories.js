import React from 'react';
import Footer from './Footer';

export default {
  title: 'Components/Footer',
  component: Footer,
  argTypes: {
    arrayOfExperiences: { control: 'object' },
  },
};

const Template = args => <Footer {...args}/>;

export const FooterComponent = Template.bind({});
FooterComponent.args = {
  
};