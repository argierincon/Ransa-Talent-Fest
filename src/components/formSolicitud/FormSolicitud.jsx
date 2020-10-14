import React, { useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import Header from '../header/Header';

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
    <div>
      <Header />
      <form onSubmit={handleSubmit}>
        <input type="date" name="fechaCarga" onChange={handleInputChange} />
        <input type="time" name="horaCarga" onChange={handleInputChange} />
        <input type="text" name="detalleMercaderia" placeholder="detalle" onChange={handleInputChange} />
        <input type="text" name="nota" placeholder="adicional" onChange={handleInputChange} />
        <input type="text" name="lugarCarga" placeholder="lugar de carga" onChange={handleInputChange} />
        <input type="text" name="lugarDescarga" placeholder="lugar de descarga" onChange={handleInputChange} />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default FormSolicitud;
