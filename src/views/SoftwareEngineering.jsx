import React from 'react';
import { Grid } from '@mui/material';
import TitleHeader from '../components/TitleHeader';
import SoftwareEngineeringProjects from '../components/Projects/SoftwareEngineeringProjects';
import OpenLMSBlendedVideo from '../assets/open-lms-blended-sample.mp4';

const PROJECTS = [
  {
    title: 'Open-LMS-Blended',
    description: 'An open source learning management system intended for K-12 educational institutions.',
    myRole: 'Software Engineer',
    myTasks: [
      'Developed an open source LMS intended for K-12 educational institutions using the MERN stack',
      'Experienced the entire development lifecycle, deployed, and documented the entire application for both Digital Ocean and AWS',
    ],
    teamSize: 1,
    cloudServices: [
      'AWS',
      'Digital Ocean',
    ],
    tools: [
      'MongoDB',
      'Express',
      'React',
      'Node.js',
    ],
    projectDuration: '3 Months',
    date: {
      startDate: 'March 2020',
      endDate: 'May 2020',
    },
    note: 'This site is no longer avaliable as of May 2021. The site was only intended to be avaliable for a year for demo purposes.',
    media: OpenLMSBlendedVideo,
    mediaAlt: 'Open-LMS-Blended Video',
    mediaTitle: 'Open-LMS-Blended Features',
    mediaDescription: 'A user is able to create an account, create a course, and upload/manage their syllabus, assignments, class schedule, and lectures. They can also manage their account such as their email, semester, password, or delete their account. Any viewer can view any created courses along with uploaded files.',
    repository: 'https://github.com/thomasmendez/open-lms-blended',
  },
];

const SoftwareEngineering = () => {
  return(
    <Grid
      container
      spacing={3}
    >
      <TitleHeader titleName={'Software Engineering Projects'}/>
      <Grid container item>
        <Grid item>
          <SoftwareEngineeringProjects arrayOfObjects={PROJECTS}/>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SoftwareEngineering;
