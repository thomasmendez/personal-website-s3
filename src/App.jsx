import React from 'react';
import {
  BrowserRouter as Router,
  useRoutes,
} from 'react-router-dom';
import Home from './views/Home';
import About from './views/About';
import Error from './views/Error';

const AppRoutes = () => {
  const routes = useRoutes([
    { path: '/', exact: true, element: <Home /> },
    { path: '/about', exact: true, element: <About /> },
    { path: '*', element: <Error errorCode={404} /> },
  ]);
  return routes;
};

const App = () => (
  <Router>
    <AppRoutes />
  </Router>
);

export default App;
