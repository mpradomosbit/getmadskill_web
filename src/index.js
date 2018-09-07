//Dependencies
import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';

//routers

import AppRoutes from './routes';
//Assestes
import './index.css';
//import registerServiceWorker from './registerServiceWorker';

render(
  <Router>
    <AppRoutes />
  </Router>,
  document.getElementById('root')
);
//registerServiceWorker();
