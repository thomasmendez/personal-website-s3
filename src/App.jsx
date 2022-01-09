import React from 'react';
import {
  BrowserRouter as Router,
  useRoutes,
} from 'react-router-dom';
import { LinkedIn, GitHub, Email } from '@mui/icons-material';
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
];

const AppRoutes = () => {
  const routes = useRoutes([
    { path: '/', exact: true, element: <About contacts={CONTACTS}/> },
    { path: '/home', exact: true, element: <About contacts={CONTACTS}/> },
    { path: '/about', exact: true, element: <About contacts={CONTACTS}/> },
    { path: '/skillsTools', exact: true, element: <Skills_Tools /> },
    { path: '/work', exact: true, element: <Work /> },
    { path: '/softwareEngineering', exact: true, element: <SoftwareEngineering /> },
    { path: '/vrar', exact: true, element: <VRAR /> },
    { path: '/resume', exact: true, element: <Resume />},
    { path: '*', element: <ErrorView errorCode={404} /> },
  ]);
  return routes;
};

const App = () => {
  return (
    <Router>
      <Header backgroundColor='grey' routes={HEADERROUTES}/>
      <AppRoutes />
      <Footer contacts={CONTACTS}/>
    </Router>
  );
};

export default App;
