import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../Views/home/Home';
import Login from '../Views/login/Login';
import FormPrueba from '../components/formPrueba/FormPrueba';
import FormSolicitud from '../components/formSolicitud/FormSolicitud';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/Home" component={Home} />
      <Route exact path="/prueba" component={FormPrueba} />
      <Route exact path="/solicitudes" component={FormSolicitud} />
    </Switch>
  </BrowserRouter>
);

export default Router;
