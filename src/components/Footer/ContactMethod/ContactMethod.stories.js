import React from 'react';
import ContactMethod from './ContactMethod';

export default {
  title: 'Components/Footer/ContactMethod',
  component: ContactMethod,
  argTypes: {
    arrayOfExperiences: { control: 'object' },
  },
};

const Template = args => <ContactMethod {...args}/>;

export const ContactMethodStory = Template.bind({});
ContactMethodStory.args = {
  
};