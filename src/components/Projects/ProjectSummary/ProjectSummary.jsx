import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography } from '@mui/material';
import SummarySubject from '../SummarySubject';

const ProjectSummary = (props) => {
  const { description, myRole, myTasks, teamSize, teamRoles, cloudServices, tools, projectDuration, date, note, fontStyleNote } = props;

  return(
    <Grid container spacing={2}>
      <SummarySubject
        topicName={'Project Description'}
        content={description}
      />
      <SummarySubject
        topicName={'My Role'}
        content={myRole}
      />
      <SummarySubject
        topicName={'My Tasks'}
        content={myTasks}
      />
      <SummarySubject
        topicName={'Team Size'}
        content={teamSize}
      />
      <SummarySubject
        topicName={'Team Roles'}
        content={teamRoles}
      />
      <SummarySubject
        topicName={'Cloud Services'}
        content={cloudServices}
      />
      <SummarySubject
        topicName={'Tools'}
        content={tools}
      />
      <SummarySubject
        topicName={'Project Duration'}
        content={projectDuration}
      />
      <SummarySubject
        topicName={'Project Date'}
        content={date.startDate + ' - ' + date.endDate}
      />
      {note && (
        <Grid item xs={12}>
          <Typography
            sx={{
              fontStyle: fontStyleNote,
            }}
          >
            {'*'+note+'*'}
          </Typography>
        </Grid>
      )}
    </Grid>
  );
};

ProjectSummary.defaultProps = {
  fontStyleNote: 'italic',
};

ProjectSummary.propTypes = {
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
  fontStyleNote: PropTypes.string,
};

export default ProjectSummary;