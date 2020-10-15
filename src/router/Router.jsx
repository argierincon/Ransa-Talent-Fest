import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../Views/home/Home';
import Login from '../Views/login/Login';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Login} />
      {' '}
      <Route exact path="/revisarsolicitudes" component={Home} />
      {' '}
      <Route exact path="/verflotapropia" component={Home} />
      {' '}
      <Route exact path="/habilitarunidades" component={Home} />
      {' '}
      <Route exact path="/disponibilidadunidades" component={Home} />
      {' '}
      <Route exact path="/habilitarconductores" component={Home} />
      {' '}
      <Route exact path="/disponibilidadconductores" component={Home} />
      {' '}
    </Switch>
  </BrowserRouter>
);

export default Router;
