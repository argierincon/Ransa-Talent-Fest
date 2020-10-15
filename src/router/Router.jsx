import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../Views/home/Home';
import Login from '../Views/login/Login';
import FormPrueba from '../components/formPrueba/FormPrueba';
import Solicitud from '../Views/mainRequest/MainRequest';
import SolicitudOrdenServicio from '../Views/ordenServicioRequest/solicitudOrdenServicio';
import RequestDetail from '../Views/requestDetail/RequestDetail';
import RequestStatus from '../Views/requestStatus/RequestStatus';
import UnitsEnablement from '../Views/UnitsEnablement/UnitsEnablement';
import UnitsAvailability from '../Views/unitsAvailability/UnitsAvailability';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Login} />
<<<<<<< HEAD
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
=======
      <Route exact path="/home" component={Home} />
      <Route exact path="/prueba" component={FormPrueba} />
      <Route exact path="/crear-solicitud" component={Solicitud} />
      <Route exact path="/orden-servicio" component={SolicitudOrdenServicio} />
      <Route exact path="/estatus-solicitudes" component={RequestStatus} />
      <Route exact path="/detalle-solicitudes" component={RequestDetail} />
      <Route exact path="/habilitacion-unidades" component={UnitsEnablement} />
      <Route exact path="/disponibilidad-unidades" component={UnitsAvailability} />
>>>>>>> b378b58443154729a46bd469c4af2a45c8c298d8
    </Switch>
  </BrowserRouter>
);

export default Router;
