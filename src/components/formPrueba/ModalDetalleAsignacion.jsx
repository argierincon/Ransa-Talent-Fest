import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import firebase from 'firebase';
import 'firebase/firestore';

import './ModalDetalleAsignacion.scss';

const ModalDetalleAsignacion = () => {
  const { id } = useParams();
  const [solicitudes, setSolicitudes] = useState({});

  const db = firebase.firestore();
  useEffect(() => {
    db.collection('solicitudes')
      .doc(id)
      .get()
      .then((doc) => {
        const dataSolicitudes = doc.data();
        dataSolicitudes.id = doc.id;
        setSolicitudes(dataSolicitudes);
      });
  }, []);

  return (
    <div>
      <div className="modal-detalle-asignacion">
        <p>
          <a href="/detalle-solicitudes">
            <i className="fas fa-times-circle close" />
          </a>
        </p>
        <div>
          <div className="div-h3">
            <h3>ASIGNACIÓN</h3>
            <h3>
              <span>ORDEN DE SERVICIO:</span>
              {solicitudes.ordenServicio}
            </h3>
          </div>
          <div className="items-asignacion">
            <div className="flex">
              <p>Conductor</p>
              <div className="box-data">{solicitudes.conductor}</div>
            </div>
            <div className="flex">
              <p>Tracto</p>
              <div className="box-data">{solicitudes.placa}</div>
            </div>
            <div className="flex">
              <p>Acoplado</p>
              <div className="box-data">{solicitudes.tipo}</div>
            </div>
          </div>
        </div>
      </div>
      ;
    </div>
  );
};

export default ModalDetalleAsignacion;
