import React from 'react';
import {
  BrowserRouter as Router,
  useRoutes,
} from 'react-router-dom';
import Error from './views/Error';
import About from './views/About';
import Skills from './views/Skills';
import Work from './views/Work';
import SoftwareEngineering from './views/SoftwareEngineering';
import VR_AR from './views/VR_AR';

const AppRoutes = () => {
  const routes = useRoutes([
    { path: '/', exact: true, element: <About /> },
    { path: '/home', exact: true, element: <About /> },
    { path: '/about', exact: true, element: <About /> },
    { path: '/skills', exact: true, element: <Skills /> },
    { path: '/work', exact: true, element: <Work /> },
    { path: '/software_engineering', exact: true, element: <SoftwareEngineering /> },
    { path: '/vr_ar', exact: true, element: <VR_AR /> },
    { path: '*', element: <Error errorCode={404} /> },
  ]);

  return routes;
};

const App = function () {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
};

export default App;
