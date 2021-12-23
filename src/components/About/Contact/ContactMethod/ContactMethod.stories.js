import React from 'react';
import ContactMethod from './ContactMethod';
import { LinkedIn, GitHub, Email } from '@mui/icons-material';

const icons = { 
  LinkedIn: <LinkedIn />,
  GitHub: <GitHub />,
  Email: <Email />,
};

export default {
  title: 'Components/ContactMethod',
  component: ContactMethod,
  argTypes: {
    contactMethodName: {
      control: {
        type: 'text',
      },
    },
    icon: {
      options: Object.keys(icons), // An array of serializable values
      mapping: icons, // Maps serializable option values to complex arg values
      control: {
        type: 'select', // Type 'select' is automatically inferred when 'options' is defined
        labels: {
          // 'labels' maps option values to string labels
          LinkedIn: 'LinkedIn',
          GitHub: 'GitHub',
          Email: 'Email',
        },
      },
    },
    hrefLink: {
      control: {
        type: 'text',
      },
    },
  },
};

const Template = args => <ContactMethod {...args}/>;

export const ContactMethodStories = Template.bind({});
ContactMethodStories.args = {
  contactMethodName: 'LinkedIn',
  icon: 'LinkedIn',
  hrefLink: 'https://www.linkedin.com/in/thomas-a-mendez',
};