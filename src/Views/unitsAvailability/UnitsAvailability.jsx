import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
import 'firebase/firestore';

import Header from '../../components/header/Header';
import TrafficLightRequest from '../../components/trafficLightRequest/TrafficLightRequest';
import './UnitsAvailability.scss';
import BarOp from '../../components/sideBarOp/BarOp';

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

  const handleChange = (e) => {
    const vehiculosTemp = [];
    if (e.target.value === 'disponibilidad') {
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
        .where('disponible', '==', e.target.value)
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
          <h3>Lista de Vehículos para verificar disponibilidad</h3>
          <div className="filtros-hab-unidades">
            <div>
              <select
                className="width-height"
                name="tipo"
                id="tipo"
                onChange={handleChangeTipo}
              >
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
                <option value="disponibilidad">Disponibilidad</option>
                <option value="true">Disponible</option>
                <option value="false">No disponible</option>
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
            {disponibilidadVehiculos.length > 0 ? (
              disponibilidadVehiculos.map((vehiculo) => (
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
                        vehiculo.disponible === 'true'
                          ? 'solicitud-asignada'
                          : 'solicitud-fallida'
                      }`}
                      estado={
                        vehiculo.disponible === 'true'
                          ? 'DISPONIBLE'
                          : 'NO DISPONIBLE'
                      }
                    />
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
export default UnitsAvailability;
