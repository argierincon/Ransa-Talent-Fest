import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
import 'firebase/firestore';

import BtnPrimary from '../../components/btnPrimary/BtnPrimary';
import Header from '../../components/header/Header';
import TrafficLightRequest from '../../components/trafficLightRequest/TrafficLightRequest';
import './RequestDetail.scss';

const RequestDetail = () => {
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

  const handleChange = (e) => {
    const conductoresTemp = [];
    if (e.target.value === 'todos') {
      db.collection('conductores')
        .get()
        .then((querySnapShot) => {
          querySnapShot.forEach((doc) => {
            const dataConductores = doc.data();
            dataConductores.id = doc.id;
            conductoresTemp.push(dataConductores);
          });
          setConductores([...conductoresTemp]);
          console.log('probando');
        });
    } else {
      db.collection('conductores')
        .where('habilitado', '==', e.target.value)
        .get()
        .then((querySnapShot) => {
          querySnapShot.forEach((doc) => {
            const dataConductores = doc.data();
            dataConductores.id = doc.id;
            conductoresTemp.push(dataConductores);
          });
          setConductores([...conductoresTemp]);
          console.log('probando');
        });
    }
  };

  return (
    <>
      <Header nombre="Cristian Narcizo" cargo="Supervisor de Operaciones" />
      <div className="seccion-estados-solicitud">
        <div className="titulo-btn">
          <h3>Solicitudes de Requerimientos</h3>
          <BtnPrimary texto="Ver asignaciones" />
        </div>
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
              <option disabled>Estatus</option>
              <option value="todos" selected>
                Todos
              </option>
              <option value="true">ASIGBNADO</option>
              <option value="false">NO ASIGNADO</option>
              <option value="false">NO ASIGNADO</option>
            </select>
          </div>
        </div>
        <div className="tabla-estatus-solicitud-detail">
          <div className="titulos-tabla grid-tabla-solicitud-detail">
            <p>Fecha de solicitud</p>
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
              className="fila grid-tabla-solicitud-detail item-solic-detalle "
            >
              <p>fecha de solicitud</p>
              <p>{solicitud.fechaCarga}</p>
              <p>{solicitud.horaCarga}</p>
              <p>Cliente</p>
              <p>nro de orden</p>
              <p>unidad</p>
              <p>mercaderia</p>
              <p>fecha de entrega</p>
              <p>{solicitud.lugarDescarga}</p>
              <div className="status-ver-mas">
                <TrafficLightRequest
                  clase="solicitud-asignada width-5rem"
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
    </>
  );
};
export default RequestDetail;
