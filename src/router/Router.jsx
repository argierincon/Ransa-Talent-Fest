import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../Views/home/Home';
import Login from '../Views/login/Login';
import FormPrueba from '../components/formPrueba/FormPrueba';
import RequestDetail from '../Views/requestDetail/RequestDetail';
import FormSolicitud from '../components/formSolicitud/FormSolicitud';
import RequestStatus from '../Views/requestStatus/RequestStatus';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/prueba" component={FormPrueba} />
      <Route exact path="/solicitudes" component={FormSolicitud} />
      <Route exact path="/estatus-solicitud" component={RequestStatus} />
      <Route exact path="/detalle-solicitud" component={RequestDetail} />
    </Switch>
  </BrowserRouter>
);

export default Router;
