import React from 'react';
import { LinkedIn, GitHub, Email } from '@mui/icons-material';
import About from './About';

export default {
  title: 'Views/About',
  component: About,
};

const Template = args => <About {...args}/>;

export const AboutView = Template.bind({});
AboutView.args = {
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