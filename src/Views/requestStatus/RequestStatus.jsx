import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import firebase from 'firebase';
import 'firebase/firestore';

import Header from '../../components/header/Header';
import TrafficLightRequest from '../../components/trafficLightRequest/TrafficLightRequest';

import './RequestStatus.scss';
import BarOrder from '../../components/sideBarOrder/BarOrder';

const RequestStatus = () => {
  const db = firebase.firestore();
  const [solicitudes, setSolicitudes] = useState([]);
  const [fecha, setFecha] = useState([]);

  useEffect(() => {
    const fechaTemp = [];
    db.collection('solicitudes')
      .get()
      .then((querySnapShot) => {
        querySnapShot.forEach((doc) => {
          const dataSolicitudes = doc.data();
          dataSolicitudes.id = doc.id;
          solicitudes.push(dataSolicitudes);
          fechaTemp.push(dataSolicitudes.date);
        });
        console.log(solicitudes);
        setSolicitudes([...solicitudes]);
        setFecha([...new Set(fechaTemp)]);
      });
  }, []);

  const handleChange = (e) => {
    const solicitudeTemp = [];
    if (e.target.value === 'todos') {
      db.collection('solicitudes')
        .orderBy('date', 'desc')
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

  const handleFecha = (e) => {
    const solicitudeTemp = [];
    if (e.target.value === 'todas') {
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
        .where('date', '==', e.target.value)
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
    if (e.target.value === 'todos') {
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
      <BarOrder />
      <div>
        <Header nombre="Moises Carrillo" cargo="Supervisor de Operaciones" />
        <div className="seccion-estados-solicitud">
          <h3>Estatus de Solicitudes</h3>
          <div className="filtros-solicitud">
            <div>
              <select
                onChange={handleFecha}
                className="width-height"
                name="fechaSolicitud"
                id="fechaSolicitud"
              >
                <option disabled selected>
                  Fecha de Solicitud
                </option>
                <option value="todas">Todas</option>
                {fecha.map((soli) => (
                  <option value={soli}>{soli}</option>
                ))}
              </select>
              <select
                onChange={handleClient}
                className="width-height"
                name="empresa"
                id="empresa"
              >
                <option disabled selected>
                  Cliente
                </option>
                <option value="todos">Todos</option>
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
                <option disabled selected>
                  Estatus
                </option>
                <option value="todos">Todos</option>
                <option value="false">Pendiente</option>
                <option value="true">Asignado</option>
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
            {solicitudes.length > 0 ? (
              solicitudes.map((solicitud) => (
                <div
                  key={solicitud.id}
                  className="fila grid-tabla-solicitud height-padding"
                >
                  <p>{solicitud.fechaCarga}</p>
                  <p>{solicitud.horaCarga}</p>
                  <p>{solicitud.cliente}</p>
                  <p>{solicitud.ordenServicio}</p>
                  <p>{solicitud.tipoDeUnidad}</p>
                  <p>{solicitud.tipoDeMercaderia}</p>
                  <p>FECHA DE ENTREGA REVISAR</p>
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
                    {solicitud.status === 'true' && (
                      <Link
                        className="linkToDetail"
                        to={`/estatus-solicitudes/${solicitud.id}`}
                      >
                        <i className="more-detail fas fa-plus-circle" />
                      </Link>
                    )}
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
    </div>
  );
};

export default RequestStatus;
