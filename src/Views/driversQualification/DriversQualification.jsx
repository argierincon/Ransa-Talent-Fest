import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
import 'firebase/firestore';

import Header from '../../components/header/Header';
import TrafficLightRequest from '../../components/trafficLightRequest/TrafficLightRequest';

import descargar from '../../assets/img/descargar.png';

import './DriversQualification.scss';

const DriversQualification = () => {
  const db = firebase.firestore();
  const [conductores, setConductores] = useState([]);

  useEffect(() => {
    db.collection('conductores')
      .get()
      .then((querySnapShot) => {
        querySnapShot.forEach((doc) => {
          const dataConductores = doc.data();
          dataConductores.id = doc.id;
          conductores.push(dataConductores);
        });
        console.log(conductores);
        setConductores([...conductores]);
      });
  }, []);

  const handleChange = (e) => {
    const conductoresTemp = [];
    if (e.target.value === 'estatus') {
      db.collection('conductores')
        .get()
        .then((querySnapShot) => {
          querySnapShot.forEach((doc) => {
            const dataConductores = doc.data();
            dataConductores.id = doc.id;
            conductoresTemp.push(dataConductores);
          });
          setConductores([...conductoresTemp]);
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
        });
    }
  };

  return (
    <>
      <Header nombre="Cristian Narcizo" cargo="Supervisor de Operaciones" />
      <div className="seccion-estados-solicitud">
        <h3>Lista de Conductores para verificar habilitación</h3>
        <div className="filtros-hab-unidades">
          <div>
            <select
              onChange={handleChange}
              className="width-height"
              name="habilitacion"
              id="habilitacion"
            >
              <option value="estatus" selected>
                Estatus
              </option>
              <option value="true">Habilitado</option>
              <option value="false">No habilitado</option>
            </select>
          </div>
        </div>
        <div className="tabla-estatus-solicitud-detail">
          <div className="titulos-tabla grid-tabla-hab-unidades">
            <p>Conductores</p>
            <p>Requerimiento 1</p>
            <p>Caducidad</p>
            <p>Requerimiento 2</p>
            <p>Caducidad</p>
            <p>Estatus</p>
            <p> </p>
          </div>
          {conductores.map((conductor) => (
            <div
              key={conductor.id}
              className="fila grid-tabla-hab-unidades item-solic-detalle"
            >
              <p>{conductor.nombre}</p>
              <p>{conductor.req1}</p>
              <p>{conductor.req1FechaCaducidad}</p>
              <p>{conductor.req2}</p>
              <p>{conductor.req2FechaCaducidad}</p>
              <TrafficLightRequest
                clase={`solicitud-asignada margin-left-2rem width7rem ${
                  conductor.habilitado === 'true'
                    ? 'solicitud-asignada'
                    : 'solicitud-fallida'
                }`}
                estado={
                  conductor.habilitado === 'true'
                    ? 'HABILITADO'
                    : 'NO HABILITADO'
                }
              />
              <div className="status-ver-mas margin-left-2rem">
                <img className="descargar" src={descargar} alt="Descargar" />
                <div className="ver-mas">
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

export default DriversQualification;
