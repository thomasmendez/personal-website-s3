import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography } from '@mui/material';
import ProjectSummary from '../ProjectSummary';
import ProjectMedia from '../ProjectMedia';
import useWindowDimensions from '../../../utils/windowDimensions';
import { BREAKPOINTSTORYBOOKDESKTOP } from '../../../utils/breakpoints';

const SoftwareEngineeringProjects = (props) => {
  const { arrayOfObjects } = props;
  const { width } = useWindowDimensions();
  
  return(
    <Grid container>
      {arrayOfObjects.map((project, index) => {
        const { title, description, myRole, myTasks, teamSize, teamRoles, cloudServices, tools, projectDuration, date, note,
          media, mediaAlt, mediaTitle, mediaDescription, website, repository } = project;
        return(
          <Grid container item key={index}>
            {width < BREAKPOINTSTORYBOOKDESKTOP ? (
              <Grid container item xs={12} spacing={3}>
                <Grid item xs={12}>
                  <Typography variant="h5">
                    {title}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <ProjectMedia
                    media={media}
                    mediaAlt={mediaAlt}
                    mediaTitle={mediaTitle}
                    mediaDescription={mediaDescription}
                    website={website}
                    repository={repository}
                  />
                </Grid>
                <Grid item xs={12}>
                  <ProjectSummary
                    description={description}
                    myRole={myRole}
                    myTasks={myTasks}
                    teamSize={teamSize}
                    teamRoles={teamRoles}
                    cloudServices={cloudServices}
                    tools={tools}
                    projectDuration={projectDuration}
                    date={date}
                    note={note}
                  />
                </Grid>
              </Grid>
            ) : (
              <Grid container item xs={12} spacing={3}>
                <Grid item xs={12}>
                  <Typography variant="h5">
                    {title}
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <ProjectSummary
                    description={description}
                    myRole={myRole}
                    myTasks={myTasks}
                    teamSize={teamSize}
                    teamRoles={teamRoles}
                    cloudServices={cloudServices}
                    tools={tools}
                    projectDuration={projectDuration}
                    date={date}
                    note={note}
                  />
                </Grid>
                <Grid item xs={6}>
                  <ProjectMedia
                    media={media}
                    mediaAlt={mediaAlt}
                    mediaTitle={mediaTitle}
                    mediaDescription={mediaDescription}
                    website={website}
                    repository={repository}
                  />
                </Grid>
              </Grid>
            )}
          </Grid>
        );
      })}
    </Grid>
  );
};

SoftwareEngineeringProjects.defaultProps = {
  arrayOfObjects: [],
};

SoftwareEngineeringProjects.propTypes = {
  arrayOfObjects: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    myRole: PropTypes.string.isRequired,
    myTasks: PropTypes.arrayOf(PropTypes.string).isRequired,
    teamSize: PropTypes.number.isRequired,
    teamRoles: PropTypes.arrayOf(PropTypes.shape({
      role: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
    })),
    cloudServices: PropTypes.arrayOf(PropTypes.string),
    tools: PropTypes.arrayOf(PropTypes.string).isRequired,
    projectDuration: PropTypes.string.isRequired,
    date: PropTypes.shape({
      startDate: PropTypes.string.isRequired,
      endDate: PropTypes.string.isRequired,
    }),
    note: PropTypes.string,
    mediaAlt: PropTypes.string,
    website: PropTypes.string,
    repository: PropTypes.string,
  })).isRequired,
};

export default SoftwareEngineeringProjects;