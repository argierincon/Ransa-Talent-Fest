import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
import 'firebase/firestore';

import Header from '../../components/header/Header';
import TrafficLightRequest from '../../components/trafficLightRequest/TrafficLightRequest';

import descargar from '../../assets/img/descargar.png';

// eslint-disable-next-line import/no-unresolved
import './UnitsEnablement.scss';

const UnitsEnablement = () => {
  const db = firebase.firestore();
  const [habilitarVehiculos, setHabilitarVehiculos] = useState([]);

  useEffect(() => {
    db.collection('vehiculos')
      .get()
      .then((querySnapShot) => {
        querySnapShot.forEach((doc) => {
          const dataVehiculos = doc.data();
          dataVehiculos.id = doc.id;
          habilitarVehiculos.push(dataVehiculos);
        });
        setHabilitarVehiculos([...habilitarVehiculos]);
      });
  }, []);

  const handleChange = (e) => {
    const vehiculosTemp = [];
    if (e.target.value === 'estado') {
      db.collection('vehiculos')
        .get()
        .then((querySnapShot) => {
          querySnapShot.forEach((doc) => {
            const dataVehiculos = doc.data();
            dataVehiculos.id = doc.id;
            vehiculosTemp.push(dataVehiculos);
          });
          setHabilitarVehiculos([...vehiculosTemp]);
        });
    } else {
      db.collection('vehiculos')
        .where('estatus', '==', e.target.value)
        .get()
        .then((querySnapShot) => {
          querySnapShot.forEach((doc) => {
            const dataVehiculos = doc.data();
            dataVehiculos.id = doc.id;
            vehiculosTemp.push(dataVehiculos);
          });
          setHabilitarVehiculos([...vehiculosTemp]);
        });
    }
  };

  const handleChangeTipo = (e) => {
    const vehiculosTemp = [];
    if (e.target.value === 'tipo') {
      db.collection('vehiculos')
        .get()
        .then((querySnapShot) => {
          querySnapShot.forEach((doc) => {
            const dataVehiculos = doc.data();
            dataVehiculos.id = doc.id;
            vehiculosTemp.push(dataVehiculos);
          });
          setHabilitarVehiculos([...vehiculosTemp]);
        });
    } else {
      db.collection('vehiculos')
        .where('tipo', '==', e.target.value)
        .get()
        .then((querySnapShot) => {
          querySnapShot.forEach((doc) => {
            const dataVehiculos = doc.data();
            dataVehiculos.id = doc.id;
            vehiculosTemp.push(dataVehiculos);
          });
          setHabilitarVehiculos([...vehiculosTemp]);
        });
    }
  };

  return (
    <>
      <Header nombre="Cristian Narcizo" cargo="Supervisor de Operaciones" />
      <div className="seccion-estados-solicitud">
        <h3>Lista de Vehículos para verificar habilitación</h3>
        <div className="filtros-hab-unidades">
          <div>
            <select className="width-height" name="tipo" id="tipo" onChange={handleChangeTipo}>
              <option value="tipo" selected>
                Tipo
              </option>
              <option value="TRACTO">Tracto</option>
              <option value="PLATAFORMA">Plataforma</option>
              <option value="CAMA BAJA">Cama baja</option>
            </select>
            <select
              onChange={handleChange}
              className="width-height"
              name="habilitacion"
              id="habilitacion"
            >
              <option value="estado" selected>
                Estado
              </option>
              <option value="HABILITADO">Habilitado</option>
              <option value="NO HABILITADO">No habilitado</option>
            </select>
          </div>
        </div>
        <div className="tabla-estatus-solicitud-detail">
          <div className="titulos-tabla grid-tabla-hab-unidades">
            <p>Placa</p>
            <p>Tipo</p>
            <p>Razón social</p>
            <p>Revisión Técnica</p>
            <p>SOAT</p>
            <p>Habilitación</p>
            <p> </p>
          </div>
          {habilitarVehiculos.length > 0 ? habilitarVehiculos.map((vehiculo) => (
            <div
              key={vehiculo.id}
              className="fila grid-tabla-hab-unidades item-solic-detalle "
            >
              <p>{vehiculo.placa}</p>
              <p>{vehiculo.tipo}</p>
              <p>{vehiculo.razonSocial}</p>
              <p>{vehiculo.revisionTecnica}</p>
              <p>{vehiculo.soat}</p>
              <TrafficLightRequest
                clase={`solicitud-asignada margin-left-2rem width7rem ${
                  vehiculo.estatus === 'HABILITADO'
                    ? 'solicitud-asignada'
                    : 'solicitud-fallida'
                }`}
                estado={vehiculo.estatus}
              />
              <div className="status-ver-mas margin-left-2rem">
                <img className="descargar" src={descargar} alt="Descargar" />
                <div className="ver-mas">
                  <p>+</p>
                </div>
              </div>
            </div>
          )) : <h4 className="fila item-solic-detalle failed-load-data">No se encontraron registros</h4> }
        </div>
      </div>
    </>
  );
};
export default UnitsEnablement;
