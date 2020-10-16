import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
import 'firebase/firestore';

import Header from '../../components/header/Header';
import TrafficLightRequest from '../../components/trafficLightRequest/TrafficLightRequest';

import './RequestStatus.scss';
import BarOrder from '../../components/sideBarOrder/BarOrder';

const RequestStatus = () => {
  const db = firebase.firestore();
  const [solicitudes, setSolicitudes] = useState([]);

  useEffect(() => {
    db.collection('solicitudes')
      .get()
      .then((querySnapShot) => {
        querySnapShot.forEach((doc) => {
          const dataSolicitudes = doc.data();
          dataSolicitudes.id = doc.id;
          solicitudes.push(dataSolicitudes);
        });
        console.log(solicitudes);
        setSolicitudes([...solicitudes]);
      });
  }, []);

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '330px auto',
      }}
    >
      <BarOrder />
      <div>
        <Header nombre="Cristian Narcizo" cargo="Supervisor de Operaciones" />
        <div className="seccion-estados-solicitud">
          <h3>Estatus de Solicitudes</h3>
          <div className="filtros-solicitud">
            <div>
              <select
                className="width-height"
                name="fechaSolicitud"
                id="fechaSolicitud"
              >
                <option value="fechaSolicitud">Fecha de Solicitud</option>
              </select>
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
            {solicitudes.map((solicitud) => (
              <div
                key={solicitud.id}
                className="fila grid-tabla-solicitud height-padding"
              >
                <p>{solicitud.fechaCarga}</p>
                <p>{solicitud.horaCarga}</p>
                <p>CLIENTE</p>
                <p>NRO ORDEN</p>
                <p>UNIDAD</p>
                <p>MERCADERIA</p>
                <p>FECHA DE ENTREGA</p>
                <p>{solicitud.lugarDescarga}</p>

                <div className="status-ver-mas">
                  <TrafficLightRequest
                    clase="solicitud-asignada margin1rem"
                    estado="Asignado"
                  />
                  <div className="ver-mas margin-06rem">
                    <p>+</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestStatus;
