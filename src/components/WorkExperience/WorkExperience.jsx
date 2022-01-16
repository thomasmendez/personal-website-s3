import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@mui/material';
import WorkTitle from './WorkTitle';
import WorkDate from './WorkDate';
import JobRole from './JobRole';
import JobDescription from './JobDescription';

const WorkExperience = (props) => {
  const { arrayOfExperiences } = props;
  return(
    <Grid container item>
      {arrayOfExperiences.map((experience, index) => {
        const { jobTitle, company, location, date, jobRole, jobDescription } = experience;
        return(
          <Grid container item key={index}>
            <Grid container item xs={10}>
              <WorkTitle
                jobTitle={jobTitle}
                company={company}
                location={location}
              />
            </Grid>
            <Grid container item xs={2}>
              <WorkDate
                date={date}
              />
            </Grid>
            <Grid container item xs={10}>
              <JobRole
                jobRole={jobRole}
              />
            </Grid>
            <Grid item xs={2}/>
            <Grid container item xs={10}>
              <JobDescription
                arrayOfStrings={jobDescription}
              />
            </Grid>
            <Grid item xs={2}/>
          </Grid>
        );
      })}
    </Grid>
  );
};

WorkExperience.defaultProps = {
  arrayOfExperiences: [],
};

WorkExperience.propTypes = {
  arrayOfExperiences: PropTypes.arrayOf(PropTypes.shape({
    jobTitle: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    location: PropTypes.shape({
      city: PropTypes.string.isRequired,
      state: PropTypes.string.isRequired,
    }).isRequired,
    date: PropTypes.shape({
      startDate: PropTypes.string.isRequired,
      endDate: PropTypes.string.isRequired,
    }).isRequired,
    jobRole: PropTypes.string.isRequired,
    jobDescription: PropTypes.arrayOf(PropTypes.string).isRequired,
  })).isRequired,
};

export default WorkExperience;