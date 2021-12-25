import React from 'react';
import {
  BrowserRouter as Router,
  useRoutes,
} from 'react-router-dom';
import ErrorView from './views/ErrorView';
import About from './views/About';
import Skills_Tools from './views/SkillsTools';
import Work from './views/Work';
import SoftwareEngineering from './views/SoftwareEngineering';
import VRAR from './views/VRAR';
import Header from './components/Header';

const AppRoutes = () => {
  const routes = useRoutes([
    { path: '/', exact: true, element: <About /> },
    { path: '/home', exact: true, element: <About /> },
    { path: '/about', exact: true, element: <About /> },
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
    </Router>
  );
};

export default App;
