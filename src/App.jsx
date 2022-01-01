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

const AppRoutes = () => {
  const routes = useRoutes([
    { path: '/', exact: true, element: <About contacts={CONTACTS}/> },
    { path: '/home', exact: true, element: <About contacts={CONTACTS}/> },
    { path: '/about', exact: true, element: <About contacts={CONTACTS}/> },
    { path: '/skillsTools', exact: true, element: <Skills_Tools /> },
    { path: '/work', exact: true, element: <Work /> },
    { path: '/softwareEngineering', exact: true, element: <SoftwareEngineering /> },
    { path: '/vrar', exact: true, element: <VRAR /> },
    { path: '*', element: <ErrorView errorCode={404} /> },
  ]);
  return routes;
};

const App = () => {
  return (
    <Router>
      <Header />
      <AppRoutes />
      <Footer contacts={CONTACTS}/>
    </Router>
  );
};

export default App;
