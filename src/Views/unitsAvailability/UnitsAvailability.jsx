import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
import 'firebase/firestore';

import Header from '../../components/header/Header';
import TrafficLightRequest from '../../components/trafficLightRequest/TrafficLightRequest';

import './UnitsAvailability.scss';

const UnitsAvailability = () => {
  const db = firebase.firestore();
  const [disponibilidadVehiculos, setHabilitarVehiculos] = useState([]);

  useEffect(() => {
    db.collection('vehiculos')
      .get()
      .then((querySnapShot) => {
        querySnapShot.forEach((doc) => {
          const dataVehiculos = doc.data();
          dataVehiculos.id = doc.id;
          disponibilidadVehiculos.push(dataVehiculos);
        });
        setHabilitarVehiculos([...disponibilidadVehiculos]);
      });
  }, []);

  return (
    <>
      <Header nombre="Cristian Narcizo" cargo="Supervisor de Operaciones" />
      <div className="seccion-estados-solicitud">
        <h3>Lista de Vehículos para verificar disponibilidad</h3>
        <div className="filtros-hab-unidades">
          <div>
            <select className="width-height" name="tipo" id="tipo">
              <option value="tipo">Tipo</option>
              <option value="tracto">Tracto</option>
              <option value="plataforma">Plataforma</option>
              <option value="camaBaja">Cama baja</option>
            </select>
            <select
              className="width-height"
              name="habilitacion"
              id="habilitacion"
            >
              <option value="disponibilidad">Disponibilidad</option>
              <option value="habilitado">Habilitado</option>
              <option value="noHabilitado">No habilitado</option>
            </select>
          </div>
        </div>
        <div className="tabla-estatus-solicitud-detail">
          <div className="titulos-tabla grid-tabla-disp-unidades">
            <p>Placa</p>
            <p>Tipo</p>
            <p>Razón social</p>
            <p>Disponibilidad</p>
            <p> </p>
          </div>
          {disponibilidadVehiculos.map((vehiculo) => (
            <div
              key={vehiculo.id}
              className="fila grid-tabla-disp-unidades item-solic-detalle "
            >
              <p>{vehiculo.placa}</p>
              <p>{vehiculo.tipo}</p>
              <p>{vehiculo.razonSocial}</p>
              <div className="status-ver-mas margin-left-2rem space-evenly">
                <TrafficLightRequest
                  clase={`solicitud-asignada width7rem ${
                    vehiculo.estatus === 'HABILITADO'
                      ? 'solicitud-asignada'
                      : 'solicitud-fallida'
                  }`}
                  estado={
                    vehiculo.estatus === 'HABILITADO'
                      ? 'DISPONIBLE'
                      : 'NO DISPONIBLE'
                  }
                />
              </div>
              {' '}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default UnitsAvailability;
