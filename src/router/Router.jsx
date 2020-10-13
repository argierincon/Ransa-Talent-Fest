import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../Views/home/Home';
import Login from '../Views/login/Login';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Login} />
      {' '}
      <Route exact path="/Home" component={Home} />
      {' '}
    </Switch>
  </BrowserRouter>
);

export default Router;
