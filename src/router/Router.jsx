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
import ModalVehicleInformation from '../components/modalVehicleInformation/ModalVehicleInformation';
import AvailableDrive from '../Views/availableDrive/AvailableDrive';
import EnableDrive from '../Views/enableDrive/EnableDrive';

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
      {/* <Route exact path="/home" component={Home} /> */}
      <Route exact path="/prueba" component={FormPrueba} />
      <Route exact path="/crear-solicitud" component={Solicitud} />
      <Route
        exact
        path="/detalle-requerimiento"
        component={SolicitudOrdenServicio}
      />
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
      <Route
        exact
        path="/verificar-disponibilidad-unidades"
        component={AvailableDrive}
      />
      <Route
        exact
        path="/verificar-habilitacion-unidades"
        component={EnableDrive}
      />
      <Route exact path="/modal" component={ModalVehicleInformation} />
    </Switch>
  </BrowserRouter>
);

export default Router;
