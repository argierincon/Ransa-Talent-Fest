import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../Views/home/Home';
import Login from '../Views/login/Login';
import FormPrueba from '../components/formPrueba/FormPrueba';
import Solicitud from '../Views/mainRequest/MainRequest';
import SolicitudOrdenServicio from '../Views/ordenServicioRequest/solicitudOrdenServicio';
import RequestDetail from '../Views/requestDetail/RequestDetail';
import RequestStatus from '../Views/requestStatus/RequestStatus';
import UnitsEnablement from '../Views/unitsEnablement/UnitsEnablement';
import UnitsAvailability from '../Views/unitsAvailability/UnitsAvailability';
import DriversEnablement from '../Views/driversEnablement/DriversEnablement';
import MainRequest from '../Views/mainRequest/MainRequest';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Login} />
      {' '}

      <Route exact path="/solicitud-requerimiento" component={MainRequest} />
      {' '}
      <Route exact path="/estatus-solicitud" component={RequestStatus} />
      {' '}

      <Route exact path="/asignar-solicitudes" component={SolicitudOrdenServicio} />
      {' '}
      <Route exact path="/detalle-solicitudes" component={RequestDetail} />
      {' '}
      <Route exact path="/habilitacion-unidades-int" component={UnitsEnablement} />
      {' '}
      <Route exact path="/disponibilidad-unidades-int" component={UnitsAvailability} />
      {' '}
      <Route exact path="/habilitacion-conductores-int" component={DriversEnablement} />
      {' '}
      <Route exact path="/disponibilidad-conductores-int" component={Home} />
      {' '}

      <Route exact path="/habilitacion-unidades-ext" component={Home} />
      {' '}
      <Route exact path="/disponibilidad-unidades-ext" component={Home} />
      {' '}
      <Route exact path="/disponibilidad-conductores-ext" component={Home} />
      {' '}
      <Route exact path="/disponibilidad-conductores-ext" component={Home} />
      {' '}
      <Route exact path="/cerrarsesion" component={Login} />
      {' '}


      <Route exact path="/solicitud-requerimiento" component={Home} />
      {' '}
      <Route exact path="/estatus-solicitud" component={Home} />

      <Route exact path="/home" component={Home} />
      <Route exact path="/prueba" component={FormPrueba} />
      <Route exact path="/crear-solicitud" component={Solicitud} />
    </Switch>
  </BrowserRouter>
);

export default Router;
