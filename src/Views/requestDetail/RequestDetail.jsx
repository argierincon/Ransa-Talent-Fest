import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
              <option value="pendiente">Pendiente</option>
              <option value="enProceso">En proceso</option>
              <option value="asignado">asignado</option>
              <option value="fallido">Fallido</option>
            </select>
          </div>
        </div>
        <div className="tabla-estatus-solicitud-detail">
          <div className="titulos-tabla grid-tabla-solicitud-detail">
            <p>Fecha solicitud</p>
            <p>Fecha carga</p>
            <p>Horacarga</p>
            <p>Cliente</p>
            <p>N° de Orden</p>
            <p>Unidad</p>
            <p>Mercadería</p>
            <p>Fecha entrega</p>
            <p>Lugar descarga</p>
            <p> </p>
          </div>
          {solicitudes.map((solicitud) => (
            <div
              key={solicitud.id}
              className="fila grid-tabla-solicitud-detail item-solic-detalle "
            >
              <p>{solicitud.date}</p>
              <p>{solicitud.fechaCarga}</p>
              <p>{solicitud.horaCarga}</p>
              <p>{solicitud.cliente}</p>
              <p>{solicitud.ordenServicio}</p>
              <p>{solicitud.tipoDeUnidad}</p>
              <p>{solicitud.tipoDeMercaderia}</p>
              <p>{solicitud.fechaCarga}</p>
              <p>{solicitud.lugarDescarga}</p>
              <div className="status-ver-mas">
                <TrafficLightRequest
                  clase="solicitud-asignada width-5rem"
                  estado="Asignado"
                />
                <Link to={`/detalle-solicitudes/${solicitud.id}`}>
                  <div className="ver-mas margin-06rem">
                    <p>+</p>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default RequestDetail;
