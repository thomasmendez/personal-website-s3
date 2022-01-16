import React from 'react';
import RenderList from './RenderList';

export default {
  title: 'Components/SkillsTools/RenderList',
  component: RenderList,
  argTypes: {
    arrayOfObjects: { control: 'array' },
  },
};

const Template = args => <RenderList {...args}/>;

export const RenderListComponent = Template.bind({});
RenderListComponent.args = {
  arrayOfObjects: [
    {'Game Engines': ['Unity']},
    {'Programming Languages': ['Python', 'JavaScript', 'Java', 'Swift', 'C#']},
    {'Front-End': ['HTML', 'CSS', 'ES6', 'React', 'Angular', 'Bootstrap', 'Material-UI', 'Webpack', 'GraphQL', 'ESLint']},
    {'Back-End': ['Node.js', 'PHP', 'Flask', 'SQLAlchemy']},
    {'Databases': ['MySQL', 'MongoDB']},
    {'Mobile Development': ['iOS (XCode)', 'Android (Android Studio)']},
    {'Unit Testing': ['Jest', 'Mocha', 'Jasmine', 'Chai', 'Enzyme', 'Junit', 'XCTest']},
    {'CI/CD Tools': ['Gitlab CI', 'Jenkins', 'Github Actions']},
    {'Data Mining': ['Classification', 'Clustering', 'Association Analysis', 'Dimensionality Reduction']},
  ],
};