import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography } from '@mui/material';
import ProjectSummary from '../ProjectSummary';
import ProjectMedia from '../ProjectMedia';
import useWindowDimensions from '../../../utils/windowDimensions';
import { BREAKPOINTSTORYBOOKDESKTOP } from '../../../utils/breakpoints';

const Project = (props) => {
  const { arrayOfObjects } = props;
  const { width } = useWindowDimensions();
  return(
    <Grid container spacing={5}>
      {arrayOfObjects.map((project, index) => {
        const { title, description, myRole, myTasks, teamSize, teamRoles, cloudServices, tools, projectDuration, date, note,
          media, mediaAlt, mediaTitle, mediaDescription, website, repository, youTubeLink, downloadLink } = project;
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
                    youTubeLink={youTubeLink}
                    downloadLink={downloadLink}
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
                <Grid item xs={1}/>
                <Grid item xs={10}>
                  <Typography variant="h5">
                    {title}
                  </Typography>
                </Grid>
                <Grid item xs={1}/>

                <Grid item xs={1}/>
                <Grid item xs={5}>
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
                <Grid item xs={5}>
                  <ProjectMedia
                    media={media}
                    mediaAlt={mediaAlt}
                    mediaTitle={mediaTitle}
                    mediaDescription={mediaDescription}
                    website={website}
                    repository={repository}
                    youTubeLink={youTubeLink}
                    downloadLink={downloadLink}
                  />
                </Grid>
                <Grid item xs={1}/>
              </Grid>
            )}
          </Grid>
        );
      })}
    </Grid>
  );
};

Project.defaultProps = {
  arrayOfObjects: [],
};

Project.propTypes = {
  arrayOfObjects: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    myRole: PropTypes.string.isRequired,
    myTasks: PropTypes.arrayOf(PropTypes.string).isRequired,
    teamSize: PropTypes.number.isRequired,
    teamRoles: PropTypes.arrayOf(PropTypes.string),
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
    youTubeLink: PropTypes.string,
    downloadLink: PropTypes.string,
  })).isRequired,
};

export default Project;