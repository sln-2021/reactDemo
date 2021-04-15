import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Home from '../components/home';
import Detail from '../components/detail';
import Welcome from '../components/welcome';
const BasicRoute = () => (
  <HashRouter >
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/detail' component={Detail} />
      <Route exact path='/welcome' component={Welcome} />
    </Switch>
  </HashRouter>
);

export default BasicRoute;
