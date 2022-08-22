import React from 'react';
import FooterLinks from './FooterLinks';
import reactImg from '../../../assets/react.png';
import vueImg from '../../../assets/vue.jpg';

const img = {
  reactImg: reactImg,
  vueImg: vueImg,
};

export default {
  title: 'Components/Footer/FooterLinks',
  component: FooterLinks,
  argTypes: {
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
    img: {
      options: Object.keys(img),
      mapping: img,
      control: {
        type: 'select',
        labels: {
          reactImg: 'reactImg',
          vueImg: 'vueImg',
        },
      },
    },
  },
};

const Template = args => <FooterLinks {...args} />;

export const FooterLinksComponent = Template.bind({});
FooterLinksComponent.args = {
  hrefLink: 'thomasamendez.com',
  textDecoration: 'none',
  color: 'black',
  hoverColor: '#800080',
  text: 'Created with React!',
  img: reactImg,
};