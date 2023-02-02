import React from 'react';
import {
  BrowserRouter as Router,
  useRoutes,
} from 'react-router-dom';
import { LinkedIn, GitHub, Email } from '@mui/icons-material';
import TrackRoute from './analytics/TrackRoute';
import WithTitle from './hoc/withTitle';
import ErrorView from './views/ErrorView';
import About from './views/About';
import Skills_Tools from './views/SkillsTools';
import Work from './views/Work';
import SoftwareEngineering from './views/SoftwareEngineering';
import VRAR from './views/VRAR';
import Resume from './views/Resume';
import ResumePdf from '../src/assets/ResumeThomasMendez.pdf';
import Header from './components/Header';
import Footer from './components/Footer';

const CONTACTS = [
  {
    contactMethod: 'LinkedIn',
    icon: <LinkedIn />,
    hrefLink: 'https://www.linkedin.com/in/thomas-a-mendez',
  },
  { 
    contactMethod: 'GitHub',
    icon: <GitHub />,
    hrefLink: 'https://github.com/thomasmendez',
  },
  {
    contactMethod: 'Email',
    icon: <Email />,
    hrefLink: 'mailto:thomasmendez01@gmail.com',
  },
];

const HEADERROUTES = [
  { id: 1, name: 'About', to: 'about' }, 
  { id: 2, name: 'Work', to: 'work' },
  { id: 3, name: 'Skills & Tools', to: 'skillsTools' },
  { id: 4, name: 'Projects', subItems: [
    { id: 5, name: 'Software Engineering', to: 'softwareEngineering' },
    { id: 6, name: 'VR / AR', to: 'vrar' },
  ]},
  { id: 7, name: 'Resume', to: 'resume', link: ResumePdf},
  { id: 8, name: 'Storybook', link: process.env.STORYBOOK_URL},
];

const AboutWithTitle = WithTitle(About);
const Skills_ToolsWithTitle = WithTitle(Skills_Tools);
const WorkWithTitle = WithTitle(Work);
const SoftwareEngineeringWithTitle = WithTitle(SoftwareEngineering);
const VRARWithTitle = WithTitle(VRAR);
const ResumeWithTitle = WithTitle(Resume);
const ErrorViewWithTitle = WithTitle(ErrorView);

const AppRoutes = () => {
  const HOMEPAGE = 'Thomas A. Mendez';
  const routes = useRoutes([
    { path: '/', exact: true, element: <About contacts={CONTACTS} title={HOMEPAGE}/> },
    { path: '/about', exact: true, element: <AboutWithTitle contacts={CONTACTS} title={'About'}/> },
    { path: '/skillsTools', exact: true, element: <Skills_ToolsWithTitle title={'Skills & Tools'}/> },
    { path: '/work', exact: true, element: <WorkWithTitle title={'Work'}/> },
    { path: '/softwareEngineering', exact: true, element: <SoftwareEngineeringWithTitle title={'Software Engineering'}/>},
    { path: '/vrar', exact: true, element: <VRARWithTitle title={'VR & AR'}/> },
    { path: '/resume', exact: true, element: <ResumeWithTitle title={'Resume'}/>},
    { path: '*', element: <ErrorViewWithTitle errorCode={404} title={'404'}/> },
  ]);
  return routes;
};

const App = () => {
  return (
    <Router>
      <TrackRoute>
        <Header backgroundColor='grey' routes={HEADERROUTES}/>
        <AppRoutes />
        <Footer contacts={CONTACTS}/>
      </TrackRoute>
    </Router>
  );
};

export default App;
