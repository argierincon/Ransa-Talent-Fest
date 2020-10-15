/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import BtnPrimary from '../btnPrimary/BtnPrimary';

const FormSolicitud = () => {
  const db = firebase.firestore();

  const [datosSolicitud, setDatosSolicitud] = useState({
    fechaCarga: null,
    horaCarga: null,
    detalleMercaderia: null,
    lugarCarga: null,
    nota: null,
    lugarDescarga: null,
  });

  const handleInputChange = (e) => {
    setDatosSolicitud({
      ...datosSolicitud,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    db.collection('solicitudes').add(datosSolicitud);
    console.log('datos guardados');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex">
        <div className="first-colum">
          <div className="flex">
            <label htmlFor="name">Fecha de carga</label>
            <input type="date" name="fechaCarga" onChange={handleInputChange} />
          </div>
          <div className="flex">
            <label htmlFor="name">Hora de carga</label>
            <input type="time" name="horaCarga" onChange={handleInputChange} />
          </div>
          <div className="flex">
            <label htmlFor="name">Lugar de descarga</label>
            <input type="text" name="lugarCarga" onChange={handleInputChange} />
          </div>
          <div className="flex">
            <label htmlFor="name">Lugar de carga</label>
            <input ttype="text" name="lugarDescarga" onChange={handleInputChange} />
          </div>
        </div>
        <div className="second-colum">
          <div className="flex">
            <label htmlFor="name">Detallemercaderia</label>
            <textarea
              className="prueba"
              name="detalleMercaderia"
              onChange={handleInputChange}
            />
          </div>
          <div className="flex">
            <label htmlFor="name">Dato adicional</label>
            <textarea
              name="datoAdicional"
              onChange={handleInputChange}
            />
          </div>
        </div>
      </div>
      <BtnPrimary texto="Solicitar" />
    </form>
  );
};

export default FormSolicitud;
