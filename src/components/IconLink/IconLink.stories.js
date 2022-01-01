import React from 'react';
import { LinkedIn, GitHub, Email } from '@mui/icons-material';
import IconLink from './IconLink';

const icons = { 
  LinkedIn: <LinkedIn />,
  GitHub: <GitHub />,
  Email: <Email />,
};

export default {
  title: 'Components/IconLink',
  component: IconLink,
  argTypes: {
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

const Template = args => <IconLink {...args}/>;

export const IconLinkComponent = Template.bind({});
IconLinkComponent.args = {
  icon: 'LinkedIn',
  hrefLink: 'https://www.linkedin.com/in/thomas-a-mendez',
  textDecoration: 'none',
  color: 'black',
  hoverColor: '#800080',
};