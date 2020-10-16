import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
import 'firebase/firestore';

import Header from '../../components/header/Header';

import descargar from '../../assets/img/descargar.png';

import './EnableDriver.scss';

const EnableDrive = () => {
  const dbName = 'conductores';
  const db = firebase.firestore();
  const [habilitacionConductores, setHabilitacionConductores] = useState([]);

  useEffect(() => {
    db.collection(dbName)
      .get()
      .then((querySnapShot) => {
        querySnapShot.forEach((doc) => {
          const dataConductores = doc.data();
          dataConductores.id = doc.id;
          habilitacionConductores.push(dataConductores);
        });
        setHabilitacionConductores([...habilitacionConductores]);
      });
  }, []);

  const handleDisponiblity = (e) => {
    const conductoresTemp = [];
    if (e.target.value === 'status') {
      db.collection(dbName)
        .get()
        .then((querySnapShot) => {
          querySnapShot.forEach((doc) => {
            const dataConductor = doc.data();
            dataConductor.id = doc.id;
            conductoresTemp.push(dataConductor);
          });
          setHabilitacionConductores([...conductoresTemp]);
        });
    } else {
      db.collection(dbName)
        .where('habilitado', '==', e.target.value)
        .get()
        .then((querySnapShot) => {
          querySnapShot.forEach((doc) => {
            const dataConductor = doc.data();
            dataConductor.id = doc.id;
            conductoresTemp.push(dataConductor);
          });
          setHabilitacionConductores([...conductoresTemp]);
        });
    }
  };

  const handleChange = (e) => {
    db.collection(dbName)
      .doc(e.target.dataset.id)
      .update({
        habilitado: e.target.value,
      })
      .then(() => {
        db.collection(dbName)
          .get()
          .then((querySnapShot) => {
            const dispTemp = [];
            querySnapShot.forEach((doc) => {
              const dataConductor = doc.data();
              dataConductor.id = doc.id;
              dispTemp.push(dataConductor);
            });
            setHabilitacionConductores([...dispTemp]);
          });
      });
  };

  return (
    <>
      <Header nombre="Andy Chuco" cargo="Mantenimiento" />
      <div className="seccion-estados-solicitud">
        <h3>Lista de Conductores para verificar habilitación</h3>
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
              <option value="HABILITADO">Habilitado</option>
              <option value="NO HABILITADO">No habilitado</option>
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
          {habilitacionConductores.map((conductor) => (
            <div
              key={conductor.id}
              className="fila grid-tabla-hab-unidades item-solic-detalle"
            >
              <p>{conductor.nombre}</p>
              <p>{conductor.req1}</p>
              <p>{conductor.req1FechaCaducidad}</p>
              <p>{conductor.req2}</p>
              <p>{conductor.req2FechaCaducidad}</p>
              <select
                value={conductor.habilitado}
                onChange={handleChange}
                data-id={conductor.id}
                className="select-hab-unidades width-height"
                name="disponibilidad"
                id="disponibilidad"
              >
                <option value="HABILITADO">Habilitado</option>
                <option value="NO HABILITADO">No Habilitado</option>
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
