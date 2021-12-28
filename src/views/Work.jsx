import React from 'react';
import { Grid } from '@mui/material';
import TitleHeader from '../components/TitleHeader';
import WorkExperience from '../components/WorkExperience';

const EXPERIENCE = [
  {
    jobTitle: 'Associate Software Engineer',
    company: 'T-Mobile',
    location: {
      city: 'Frisco',
      state: 'TX',
    },
    date: {
      startDate: 'August 2020',
      endDate: 'Present',
    },
    jobRole: 'Software Engineer',
    jobDescription: [
      'Works with team through full software development life cycle in order to deliver quarterly features and deliverables based on customer needs',
      'Focused on delivering front-end research, design, and features for internal team product',
      'Created Python package intended to report non-inclusive words present in a directory and suggest alternative words',
    ],
  },
  {
    jobTitle: 'Software Engineer',
    company: 'Surfboard',
    location: {
      city: 'Richardson',
      state: 'TX',
    },
    date: {
      startDate: 'June 2019',
      endDate: 'Mar 2020',
    },
    jobRole: 'Mobile Augmented Reality Development (Android & iOS)',
    jobDescription: [
      'Prototyped persistent world-scale augmented reality using ARCore and ARKit',
      'Prototyped Instagram like gestures for 3D object/text manipulation in ARKit',
      'Designed and documented reusable modules for Android and iOS prototypes using MVC architecture',
      'Used agile methodology and rapid prototyping practices',
    ],
  },
  {
    jobTitle: 'Support Analyst Intern',
    company: 'Accenture',
    location: {
      city: 'Irving',
      state: 'TX',
    },
    date: {
      startDate: 'June 2018',
      endDate: 'August 2018',
    },
    jobRole: 'DevOps Engineer',
    jobDescription: [
      'Worked in the development of creating a provisioning tool using Terraform, APEX, and RESTful Services, which would drive the provisioning of resources in Oracle Cloud Infrastructure',
      'Created reusable Terraform modules for team use',
    ],
  },
  {
    jobTitle: 'C# Unity Programmer',
    company: 'SAGA Lab',
    location: {
      city: 'Austin',
      state: 'TX',
    },
    date: {
      startDate: 'January 2018',
      endDate: 'May 2018',
    },
    jobRole: 'Video Game Developer',
    jobDescription: [
      'Worked in the development of creating a provisioning tool using Terraform, APEX, and RESTful Services, which would drive the provisioning of resources in Oracle Cloud Infrastructure',
      'Created reusable Terraform modules for team use',
    ],
  },
];

const Work = () => (
  <Grid
    container
    spacing={3}
  >
    <TitleHeader titleName={'Where I Worked'}/>
    <Grid container item>
      <Grid item xs={1}/>
      <Grid item xs={10}>
        <WorkExperience
          arrayOfExperiences={EXPERIENCE}
        />
      </Grid>
      <Grid item xs={1}/>
    </Grid>
  </Grid>
);

export default Work;
