import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import firebase from 'firebase';
import 'firebase/firestore';

import BtnPrimary from '../../components/btnPrimary/BtnPrimary';
import Header from '../../components/header/Header';
import TrafficLightRequest from '../../components/trafficLightRequest/TrafficLightRequest';
import './RequestDetail.scss';
import BarOp from '../../components/sideBarOp/BarOp';

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
        setSolicitudes([...solicitudes]);
      });
  }, []);

  const handleChange = (e) => {
    const solicitudeTemp = [];
    if (e.target.value === 'status') {
      db.collection('solicitudes')
        .get()
        .then((querySnapShot) => {
          querySnapShot.forEach((doc) => {
            const dataSolicitudes = doc.data();
            dataSolicitudes.id = doc.id;
            solicitudeTemp.push(dataSolicitudes);
          });
          setSolicitudes([...solicitudeTemp]);
        });
    } else {
      db.collection('solicitudes')
        .where('status', '==', e.target.value)
        .get()
        .then((querySnapShot) => {
          querySnapShot.forEach((doc) => {
            const dataSolicitudes = doc.data();
            dataSolicitudes.id = doc.id;
            solicitudeTemp.push(dataSolicitudes);
          });
          setSolicitudes([...solicitudeTemp]);
        });
    }
  };

  const handleClient = (e) => {
    const solicitudeTemp = [];
    if (e.target.value === 'cliente') {
      db.collection('solicitudes')
        .get()
        .then((querySnapShot) => {
          querySnapShot.forEach((doc) => {
            const dataSolicitudes = doc.data();
            dataSolicitudes.id = doc.id;
            solicitudeTemp.push(dataSolicitudes);
          });
          setSolicitudes([...solicitudeTemp]);
        });
    } else {
      db.collection('solicitudes')
        .where('cliente', '==', e.target.value)
        .get()
        .then((querySnapShot) => {
          querySnapShot.forEach((doc) => {
            const dataSolicitudes = doc.data();
            dataSolicitudes.id = doc.id;
            solicitudeTemp.push(dataSolicitudes);
          });
          setSolicitudes([...solicitudeTemp]);
        });
    }
  };
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '330px auto',
      }}
    >
      <BarOp />
      <div>
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
              <select
                onChange={handleClient}
                className="width-height"
                name="empresa"
                id="empresa"
              >
                <option value="cliente" selected>
                  Cliente
                </option>
                <option value="Cementos Pacasmayo S.A.A">
                  Cementos Pacasmayo S.A.A
                </option>
                <option value="Marcobre S.A.C">Marcobre S.A.C</option>
                <option value="Compañia Minera Antamina S.A">
                  Compañia Minera Antamina S.A
                </option>
                <option value="E.M Los Quenuales">E.M Los Quenuales</option>
                <option value="Compañia Minera Ares S.A.C">
                  Compañia Minera Ares S.A.C
                </option>
                <option value="Compañia Minera Ares S.A.C">
                  Compañia Minera Ares S.A.C
                </option>
              </select>
              <select
                onChange={handleChange}
                className="width-height"
                name="estado"
                id="estado"
              >
                <option value="status" selected>
                  Estatus
                </option>
                <option value="true">ASIGNADO</option>
                <option value="false">NO ASIGNADO</option>
              </select>
            </div>
          </div>
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
          {solicitudes.length > 0 ? (
            solicitudes.map((solicitud) => (
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
                    clase={`width-5rem ${
                      solicitud.status === 'true'
                        ? 'solicitud-asignada'
                        : 'solicitud-pendiente'
                    }`}
                    estado={
                      solicitud.status === 'true' ? 'ASIGNADO' : 'PENDIENTE'
                    }
                  />
                  <Link
                    className="linkToDetail"
                    to={`/detalle-solicitudes/${solicitud.id}`}
                  >
                    <i className="more-detail fas fa-plus-circle" />
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <h4 className="fila item-solic-detalle failed-load-data">
              No se encontraron registros
            </h4>
          )}
        </div>
      </div>
    </div>
  );
};
export default RequestDetail;
