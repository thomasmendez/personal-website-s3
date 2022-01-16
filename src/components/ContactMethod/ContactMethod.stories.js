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
    direction: { 
      options: ['column', 'row'],
      control: { type: 'radio' },
    },
    contactMethodName: {
      control: {
        type: 'text',
      },
    },
    icon: {
      options: Object.keys(icons),
      mapping: icons,
      control: {
        type: 'select',
        labels: {
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
    textDecoration: {
      control: { 
        type: 'text',
      },
    },
    color: {
      control: {
        type: 'color',
      },
    },
    hoverColor: {
      control: {
        type: 'color',
      },
    },
  },
};

const Template = args => <ContactMethod {...args}/>;

export const ContactMethodComponent = Template.bind({});
ContactMethodComponent.args = {
  direction: 'column',
  contactMethodName: 'LinkedIn',
  icon: 'LinkedIn',
  hrefLink: 'https://www.linkedin.com/in/thomas-a-mendez',
  textDecoration: 'none',
  color: 'black',
  hoverColor: '#800080',
};