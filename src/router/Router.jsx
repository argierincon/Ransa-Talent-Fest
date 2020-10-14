import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../Views/home/Home';
import Login from '../Views/login/Login';
import FormPrueba from '../components/formPrueba/FormPrueba';
import RequestDetail from '../Views/requestDetail/RequestDetail';
import FormSolicitud from '../components/formSolicitud/FormSolicitud';
import RequestStatus from '../Views/requestStatus/RequestStatus';
import DriveEnablement from '../Views/driveEnablement/DriveEnablement';
import UnitsAvailability from '../Views/unitsAvailability/UnitsAvailability';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/prueba" component={FormPrueba} />
      <Route exact path="/solicitudes" component={FormSolicitud} />
      <Route exact path="/estatus-solicitudes" component={RequestStatus} />
      <Route exact path="/detalle-solicitudes" component={RequestDetail} />
      <Route exact path="/habilitacion-unidades" component={DriveEnablement} />
      <Route exact path="/disponibilidad-unidades" component={UnitsAvailability} />

    </Switch>
  </BrowserRouter>
);

export default Router;
