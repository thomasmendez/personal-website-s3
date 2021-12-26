import React from 'react';
import { Grid } from '@mui/material';
import TitleHeader from '../components/TitleHeader';
import SkillsTools from '../components/SkillsTools';

const SkillsToolsView = () => (
  <Grid
    container
    spacing={3}
  >
    <TitleHeader titleName={'Skills & Tools'}/>
    <Grid container item>
      <Grid item xs={3}/>
      <Grid item xs={6}>
        <SkillsTools />
      </Grid>
      <Grid item xs={3}/>
    </Grid>
  </Grid>
);

export default SkillsToolsView;
