import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../Views/home/Home';
import Login from '../Views/login/Login';
import FormPrueba from '../components/formPrueba/FormPrueba';
import Solicitud from '../Views/mainRequest/MainRequest';
import SolicitudOrdenServicio from '../Views/ordenServicioRequest/solicitudOrdenServicio';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/Home" component={Home} />
      <Route exact path="/prueba" component={FormPrueba} />
      <Route exact path="/solicitud" component={Solicitud} />
      <Route exact path="/ordenServicio" component={SolicitudOrdenServicio} />
    </Switch>
  </BrowserRouter>
);

export default Router;
