import React from 'react';
import Header from '../components/Header';
import {
    BrowserRouter as Router,
  } from 'react-router-dom';

export default {
    title: 'Components/Header',
    component: Header,
    argTypes: {
        variant: {
          options: ['primary', 'secondary'],
          control: { type: 'radio' },
        },
    },
};

const Template = args => <Router>
  <Header {...args}/>
</Router>;

export const Navigation = Template.bind({});
Navigation.args = {
    
};