import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
import 'firebase/firestore';

import Header from '../../components/header/Header';

import descargar from '../../assets/img/descargar.png';

import './EnableDrive.scss';

const EnableDrive = () => {
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
      <Header nombre="Andy Chuco" cargo="Mantenimiento" />
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
          <div className="titulos-tabla grid-tabla-verif-disp-unidades">
            <p>Placa</p>
            <p>Tipo</p>
            <p>Razón social</p>
            <p>Revisión Técnica</p>
            <p>SOAT</p>
            <p>Habilitación</p>
            <p> </p>
          </div>
          {disponibilidadVehiculos.map((vehiculo) => (
            <div
              key={vehiculo.id}
              className="fila grid-tabla-verif-disp-unidades item-solic-detalle "
            >
              <p>{vehiculo.placa}</p>
              <p>{vehiculo.tipo}</p>
              <p>{vehiculo.razonSocial}</p>
              <p>{vehiculo.revisionTecnica}</p>
              <p>{vehiculo.soat}</p>
              <select
                className="select-hab-unidades width-height"
                name="disponibilidad"
                id="disponibilidad"
              >
                <option value="disponible">Habilitado</option>
                <option value="noDisponible">No Habilitado</option>
              </select>
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
export default EnableDrive;
