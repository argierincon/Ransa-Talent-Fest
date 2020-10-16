import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import firebase from 'firebase';
import 'firebase/firestore';
import Header from '../../components/header/Header';
import TrafficLightRequest from '../../components/trafficLightRequest/TrafficLightRequest';
import descargar from '../../assets/img/descargar.png';
import './DriversEnablement.scss';
import BarOp from '../../components/sideBarOp/BarOp';

const DriversEnablement = () => {
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
    if (e.target.value === 'todos') {
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
          <h3>Lista de Vehículos para verificar habilitación</h3>
          <div className="filtros-hab-unidades">
            <div>
              <select
                onChange={handleChange}
                className="width-height"
                name="habilitacion"
                id="habilitacion"
              >
                <option disabled selected>
                  Estatus
                </option>
                <option value="todos">Todos</option>
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
            {conductores.length > 0 ? (
              conductores.map((conductor) => (
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
                      conductor.habilitado === 'HABILITADO'
                        ? 'solicitud-asignada'
                        : 'solicitud-fallida'
                    }`}
                    estado={
                      conductor.habilitado === 'HABILITADO'
                        ? 'HABILITADO'
                        : 'NO HABILITADO'
                    }
                  />
                  <div className="status-ver-mas margin-left-2rem">
                    <img
                      className="descargar"
                      src={descargar}
                      alt="Descargar"
                    />
                    <div className="status-ver-mas margin-left-2rem">
                      <a target="_blank" href="https://drive.google.com/drive/folders/1VvSxkYnPWZyZEkaeRwTd-djCCh9GB3_R?usp=sharing"><img className="descargar" src={descargar} alt="Descargar" /></a>
                      <Link className="linkToDetail" to={`/verificar-habilitacion-conductores/${conductor.id}`}>
                        <i className="more-detail fas fa-plus-circle" />
                      </Link>
                    </div>
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

export default DriversEnablement;
