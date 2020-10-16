import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
import 'firebase/firestore';
import BarMantC from '../../components/sideBarMantC/BarMantC';

import Header from '../../components/header/Header';

import './AvailableDriver.scss';

const AvailableDrive = () => {
  const dbName = 'conductores';
  const db = firebase.firestore();
  const [disponibilidadConductores, setHabilitarConductores] = useState([]);

  useEffect(() => {
    db.collection(dbName)
      .get()
      .then((querySnapShot) => {
        querySnapShot.forEach((doc) => {
          const dataConductores = doc.data();
          dataConductores.id = doc.id;
          disponibilidadConductores.push(dataConductores);
        });
        setHabilitarConductores([...disponibilidadConductores]);
      });
  }, []);

  const handleDisponiblity = (e) => {
    const conductoresTemp = [];
    if (e.target.value === 'status') {
      db.collection(dbName)
        .get()
        .then((querySnapShot) => {
          querySnapShot.forEach((doc) => {
            const dataConductores = doc.data();
            dataConductores.id = doc.id;
            conductoresTemp.push(dataConductores);
          });
          setHabilitarConductores([...conductoresTemp]);
        });
    } else {
      db.collection(dbName)
        .where('disponible', '==', e.target.value)
        .get()
        .then((querySnapShot) => {
          querySnapShot.forEach((doc) => {
            const dataConductores = doc.data();
            dataConductores.id = doc.id;
            conductoresTemp.push(dataConductores);
          });
          setHabilitarConductores([...conductoresTemp]);
        });
    }
  };

  const handleChange = (e) => {
    db.collection(dbName)
      .doc(e.target.dataset.id)
      .update({
        disponible: e.target.value,
      })
      .then(() => {
        db.collection(dbName)
          .get()
          .then((querySnapShot) => {
            const dispTemp = [];
            querySnapShot.forEach((doc) => {
              const dataConductores = doc.data();
              dataConductores.id = doc.id;
              dispTemp.push(dataConductores);
            });
            setHabilitarConductores([...dispTemp]);
          });
      });
  };

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '330px auto',
      }}
    >
      <BarMantC />
      <div>
        <Header nombre="Andy Chuco" cargo="Mantenimiento" />
        <div className="seccion-estados-solicitud">
          <h3>Lista de Conductores para verificar disponibilidad</h3>
          <div className="filtros-hab-unidades">
            <div>
              <select
                onChange={handleDisponiblity}
                className="width-height"
                name="habilitacion"
                id="habilitacion"
              >
                <option value="status" selected>
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
            {disponibilidadConductores.length > 0 ? (
              disponibilidadConductores.map((conductor) => (
                <div
                  key={conductor.id}
                  className="fila grid-tabla-disp-conductores item-solic-detalle "
                >
                  <p>{conductor.dni}</p>
                  <p>{conductor.nombre}</p>
                  <select
                    value={conductor.disponible}
                    onChange={handleChange}
                    data-id={conductor.id}
                    className="select-disp-conductores width-height"
                    name="disponibilidad"
                    id="disponibilidad"
                  >
                    <option value="true">Disponible</option>
                    <option value="false">No disponible</option>
                  </select>
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
export default AvailableDrive;
