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
      'Focuses on delivering front-end research, design, and features for internal team product microapps in React and Vue',
      'Works with Azure services, Microsoft Graph API, and added Microsoft Auth to front-end and backend applications',
      'Created Natural Language Processing Python package intended to report non-inclusive words in project repositories',
      'Ensures all front-end and back-end features have adequate unit test, integration test, end-to-end test, and fulfills story requirements',
      'Mentors and leads associate and junior engineers in developing highly efficient and maintainable features while following code standards',
      'Designs and documents expected features for team to develop for intended product',
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
      'Worked with various Android and iOS libraries to develop features involving storage, sensors, geolocation, camera, and visual mapping',
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
      <Grid container item spacing={{ xs: 3, md: 3 }} ml={{ xs: 5, md: 10 }} mr={{ xs: 5, md: 10 }}>
        <WorkExperience
          arrayOfExperiences={EXPERIENCE}
        />
      </Grid>
    </Grid>
  </Grid>
);

export default Work;
