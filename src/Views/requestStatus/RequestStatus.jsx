import React from 'react';
import Header from '../../components/header/Header';
import TrafficLightRequest from '../../components/trafficLightRequest/TrafficLightRequest';
import './RequestStatus.scss';

const RequestStatus = () => (
  <>
    <Header />
    <div className="seccion-estados-solicitud">
      <h3>Solicitudes de Orden de Servicio</h3>
      <div className="filtros-solicitud">
        <p>Estatus</p>
        <div>
          <input className="width-height inpunt-date" type="date" />
          <select className="width-height" name="empresa" id="empresa">
            <option value="pacasmayo">Cementos Pacasmayo S.A.A</option>
            <option value="marcobre">Marcobre S.A.C</option>
            <option value="antamina">Compañia Minera Antamina S.A</option>
            <option value="quenuales">E.M Los Quenuales</option>
            <option value="ares">Compañia Minera Ares S.A.C</option>
            <option value="yanacocha">Compañia Minera Ares S.A.C</option>
          </select>
          <select className="width-height" name="estado" id="estado">
            <option value="pendiente">Pendiente</option>
            <option value="asignado">Asignado</option>
            <option value="cancelado">Cancelado</option>
          </select>
        </div>
      </div>
      <div className="tabla-estatus-solicitud">
        <div className="titulos-tabla grid-tabla-solicitud">
          <p>Fecha de carga</p>
          <p>Hora de carga</p>
          <p>Cliente</p>
          <p>N° de Orden</p>
          <p>Unidad</p>
          <p>Mercadería</p>
          <p>Fecha de entrega</p>
          <p>Lugar de descarga</p>
          <p> </p>
        </div>
        <div className="linea-bg grid-tabla-solicitud height-padding ">
          <p>06/10/2020</p>
          <p>8:00:00</p>
          <p>2287 - CIA Minera Antamina</p>
          <p>12345678</p>
          <p>Cama baja</p>
          <p>Diversos</p>
          <p>06/10/2020</p>
          <p>Antamina</p>
          <TrafficLightRequest clase="solicitud-pendiente" estado="Pendiente" />
        </div>
        <div className="linea-simple grid-tabla-solicitud height-padding ">
          <p>06/10/2020</p>
          <p>8:00:00</p>
          <p>2287 - CIA Minera Antamina</p>
          <p>12345678</p>
          <p>Cama baja</p>
          <p>Diversos</p>
          <p>06/10/2020</p>
          <p>Antamina</p>
          <TrafficLightRequest clase="solicitud-pendiente" estado="Pendiente" />
        </div>
        <div className="linea-bg grid-tabla-solicitud height-padding ">
          <p>06/10/2020</p>
          <p>8:00:00</p>
          <p>2287 - CIA Minera Antamina</p>
          <p>12345678</p>
          <p>Cama baja</p>
          <p>Diversos</p>
          <p>06/10/2020</p>
          <p>Antamina</p>
          <TrafficLightRequest
            clase="solicitud-fallida"
            estado="Cancelada"
          />
        </div>
        <div className="linea-simple grid-tabla-solicitud height-padding ">
          <p>06/10/2020</p>
          <p>8:00:00</p>
          <p>2287 - CIA Minera Antamina</p>
          <p>12345678</p>
          <p>Cama baja</p>
          <p>Diversos</p>
          <p>06/10/2020</p>
          <p>Antamina</p>
          <TrafficLightRequest clase="solicitud-asignada" estado="Asignado" />
        </div>
      </div>
    </div>
  </>
);

export default RequestStatus;
