import React from 'react';
import TitleHeader from './SkillsTools';

export default {
  title: 'Components/SkillsTools',
  component: TitleHeader,
  argTypes: {
    skills: { control: 'array' },
    tools: { control: 'array' },
  },
};

const Template = args => <TitleHeader {...args}/>;

export const SkillToolsSection = Template.bind({});
SkillToolsSection.args = {
  skills: [
    {'Trillingual': ['English', 'Spanish', 'Portuguese']},
    {'Software Methodologies and Practices': ['Agile', 'Scrum', 'Rapid Prototyping']},
    {'Design Thinking': ['IBM Enterprise Design Thinking']},
  ],
  tools: [
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