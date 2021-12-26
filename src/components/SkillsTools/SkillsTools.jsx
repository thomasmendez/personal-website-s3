import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@mui/material';
import Topic from './Topic';
import RenderList from './RenderList';

const SkillsTools = (props) => {
  const { skills, tools } = props;
  return(
    <Grid container item>
      <Grid item xs={12}>
        <Topic topicName={'Skills'} />
        <RenderList arrayOfObjects={skills}/>
      </Grid>
      <Grid item xs={12}>
        <Topic topicName={'Tools'} />
        <RenderList arrayOfObjects={tools}/>
      </Grid>
    </Grid>
  );
};

SkillsTools.defaultProps = {
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

SkillsTools.propTypes = {
  skills: PropTypes.arrayOf(PropTypes.shape({
    skill: PropTypes.arrayOf(PropTypes.string),
  })),
  tools: PropTypes.arrayOf(PropTypes.shape({
    tool: PropTypes.arrayOf(PropTypes.string),
  })),
};

export default SkillsTools;