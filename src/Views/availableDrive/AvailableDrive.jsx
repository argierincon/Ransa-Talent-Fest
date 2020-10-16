import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
import 'firebase/firestore';
import Header from '../../components/header/Header';
import './AvailableDrive.scss';
import BarMant from '../../components/sideBarMant/BarMant' ;

const AvailableDrive = () => {
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
    console.log(e.target.dataset.id);
    console.log(e.target.value);
    db.collection('vehiculos')
      .doc(e.target.dataset.id)
      .update({
        disponible: e.target.value,
      })
      .then(() => {
        db.collection('vehiculos')
          .get()
          .then((querySnapShot) => {
            const dispTemp = [];
            querySnapShot.forEach((doc) => {
              const dataVehiculos = doc.data();
              dataVehiculos.id = doc.id;
              dispTemp.push(dataVehiculos);
            });
            setHabilitarVehiculos([...dispTemp]);
          });
      });
  };

  return (
    <>
      <Header nombre="Andy Chuco" cargo="Mantenimiento" />
      <BarMant></BarMant>
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
              <select
                value={vehiculo.disponible}
                onChange={handleChange}
                data-id={vehiculo.id}
                className="select-disp-unidades width-height"
                name="disponibilidad"
                id="disponibilidad"
              >
                <option value="true">Disponible</option>
                <option value="false">No disponible</option>
              </select>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default AvailableDrive;
