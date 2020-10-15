import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from '../Views/login/Login';
import FormPrueba from '../components/formPrueba/FormPrueba';
import Solicitud from '../Views/mainRequest/MainRequest';
import SolicitudOrdenServicio from '../Views/ordenServicioRequest/solicitudOrdenServicio';
import RequestDetail from '../Views/requestDetail/RequestDetail';
import RequestStatus from '../Views/requestStatus/RequestStatus';
import UnitsEnablement from '../Views/unitsEnablement/UnitsEnablement';
import UnitsAvailability from '../Views/unitsAvailability/UnitsAvailability';
import DriversEnablement from '../Views/driversEnablement/DriversEnablement';
import AddDrivers from '../components/formPrueba/AddDrivers';
import DriversAvailability from '../Views/driversAvailability/DriversAvailability';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Login} />
      {' '}
      <Route exact path="/revisarsolicitudes" component={FormPrueba} />
      {' '}
      <Route exact path="/habilitarunidades" component={FormPrueba} />
      {' '}
      <Route exact path="/disponibilidadunidades" component={FormPrueba} />
      {' '}
      <Route exact path="/habilitarconductores" component={FormPrueba} />
      {' '}
      <Route exact path="/disponibilidadconductores" component={FormPrueba} />
      {' '}
      <Route exact path="/orden-servicio" component={SolicitudOrdenServicio} />
      <Route exact path="/estatus-solicitudes" component={RequestStatus} />
      <Route exact path="/detalle-solicitudes" component={RequestDetail} />
      <Route exact path="/habilitacion-unidades" component={UnitsEnablement} />
      <Route exact path="/prueba" component={FormPrueba} />
      <Route exact path="/agregar-conductores" component={AddDrivers} />
      <Route
        exact
        path="/disponibilidad-unidades"
        component={UnitsAvailability}
      />
      <Route
        exact
        path="/habilitacion-conductores"
        component={DriversEnablement}
      />
      <Route
        exact
        path="/disponibilidad-conductores"
        component={DriversAvailability}
      />
    </Switch>
  </BrowserRouter>
);

export default Router;
