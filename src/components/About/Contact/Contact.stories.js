import React from 'react';
import Contact from './Contact';
import { LinkedIn, GitHub, Email } from '@mui/icons-material';

export default {
  title: 'Components/Contact',
  component: Contact,
  argTypes: {
    contacts: {
      control: {
        type: 'object',
      },
    },
  },
};

const Template = args => <Contact {...args}/>;

export const ContactStories = Template.bind({});
ContactStories.args = {
  contacts: [
    {
      contactMethod: 'LinkedIn',
      icon: <LinkedIn />,
      hrefLink: 'https://www.linkedin.com/in/thomas-a-mendez',
    },
    { 
      contactMethod: 'GitHub',
      icon: <GitHub />,
      hrefLink: 'https://github.com/thomasmendez',
    },
    {
      contactMethod: 'Email',
      icon: <Email />,
      hrefLink: 'mailto:thomasmendez01@gmail.com',
    },
  ],
};