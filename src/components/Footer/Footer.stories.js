import React from 'react';
import { LinkedIn, GitHub, Email } from '@mui/icons-material';
import Footer from './Footer';

export default {
  title: 'Components/Footer',
  component: Footer,
  argTypes: {
    contacts: {
      control: {
        type: 'object',
      },
    },
  },
};

const Template = args => <Footer {...args}/>;

export const FooterComponent = Template.bind({});
FooterComponent.args = {
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