import React from 'react';
import {
  BrowserRouter as Router,
  useRoutes,
} from 'react-router-dom';
import Error from './views/Error';
import About from './views/About';
import Skills_Tools from './views/Skills_Tools';
import Work from './views/Work';
import SoftwareEngineering from './views/SoftwareEngineering';
import VR_AR from './views/VR_AR';
import Header from './components/Header';

const AppRoutes = () => {
  const routes = useRoutes([
    { path: '/', exact: true, element: <About /> },
    { path: '/home', exact: true, element: <About /> },
    { path: '/about', exact: true, element: <About /> },
    { path: '/skills_tools', exact: true, element: <Skills_Tools /> },
    { path: '/work', exact: true, element: <Work /> },
    { path: '/software_engineering', exact: true, element: <SoftwareEngineering /> },
    { path: '/vr_ar', exact: true, element: <VR_AR /> },
    { path: '*', element: <Error errorCode={404} /> },
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
