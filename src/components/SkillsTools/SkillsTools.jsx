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
  skills: [],
  tools: [],
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