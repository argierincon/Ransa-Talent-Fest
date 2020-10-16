import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
import 'firebase/firestore';

import Header from '../../components/header/Header';
import TrafficLightRequest from '../../components/trafficLightRequest/TrafficLightRequest';

import './DriversAvailability.scss';
import BarOp from '../../components/sideBarOp/BarOp';


const DriversAvailability = () => {
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
      <BarOp/>
      <div className="seccion-estados-solicitud">
        <h3>Lista de Vehículos para verificar habilitación</h3>
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
              <option value="true">Disponible</option>
              <option value="false">No disponible</option>
            </select>
          </div>
        </div>
        <div className="tabla-estatus-solicitud-detail">
          <div className="titulos-tabla grid-tabla-disp-conductores">
            <p>DNI</p>
            <p>Conductores</p>
            <p>Estatus</p>
          </div>
          {conductores.map((conductor) => (
            <div
              key={conductor.id}
              className="fila grid-tabla-disp-conductores item-solic-detalle"
            >
              <p>{conductor.dni}</p>
              <p>{conductor.nombre}</p>
              <TrafficLightRequest
                clase={`solicitud-asignada margin-auto width7rem ${
                  conductor.habilitado === 'true'
                    ? 'solicitud-asignada'
                    : 'solicitud-fallida'
                }`}
                estado={
                  conductor.habilitado === 'true'
                    ? 'DISPONIBLE'
                    : 'NO DISPONIBLE'
                }
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default DriversAvailability;
