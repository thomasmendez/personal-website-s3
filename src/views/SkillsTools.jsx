import React from 'react';
import { Grid } from '@mui/material';
import TitleHeader from '../components/TitleHeader';
import SkillsTools from '../components/SkillsTools';

const SKILLS = [
  {'Trillingual': ['English', 'Spanish', 'Portuguese']},
  {'Software Methodologies and Practices': ['Agile', 'Scrum', 'Rapid Prototyping']},
  {'Design Thinking': ['IBM Enterprise Design Thinking']},
];

const TOOLS = [
  {'Game Engines': ['Unity']},
  {'Programming Languages': ['Python', 'JavaScript', 'Java', 'Swift', 'C#']},
  {'Front-End': ['HTML', 'CSS', 'ES6', 'React', 'Angular', 'Bootstrap', 'Material-UI', 'Webpack', 'GraphQL', 'ESLint']},
  {'Back-End': ['Node.js', 'PHP', 'Flask', 'SQLAlchemy']},
  {'Databases': ['MySQL', 'MongoDB']},
  {'Mobile Development': ['iOS (XCode)', 'Android (Android Studio)']},
  {'Unit Testing': ['Jest', 'Mocha', 'Jasmine', 'Chai', 'Enzyme', 'Junit', 'XCTest']},
  {'CI/CD Tools': ['Gitlab CI', 'Jenkins', 'Github Actions']},
  {'Data Mining': ['Classification', 'Clustering', 'Association Analysis', 'Dimensionality Reduction']},
];

const SkillsToolsView = () => (
  <Grid
    container
    spacing={3}
  >
    <TitleHeader titleName={'Skills & Tools'}/>
    <Grid container item>
      <Grid item xs={3}/>
      <Grid item xs={6}>
        <SkillsTools
          skills={SKILLS}
          tools={TOOLS}
        />
      </Grid>
      <Grid item xs={3}/>
    </Grid>
  </Grid>
);

export default SkillsToolsView;