//Dependencies
import React from 'react';
import {Route, Switch} from 'react-router-dom';

//components
import App from './components/App';
import Home from './components/Home';
import Parent from './components/Parent';
import Player from './components/Player';
import Coach from './components/Coach';
import Page404 from './components/Page404';
import Terms from './components/Thems';
import Legal from './components/Legal';
import Contact from './components/Contact';

const AppRoutes = () =>
  <App>
    <Switch>
      <Route exact path={"/contact"} component={Contact}/>
      <Route exact path={"/legal"} component={Legal}/>
      <Route exact path={"/terms"} component={Terms}/>
      <Route exact path={"/coach"} component={Coach} />
      <Route exact path={"/parent"} component={Parent} />
      <Route exact path={"/player"} component={Player} />
      <Route exact path={"/"} component={Home} />
      <Route component={Page404} />
    </Switch>
  </App>;
export default AppRoutes;



