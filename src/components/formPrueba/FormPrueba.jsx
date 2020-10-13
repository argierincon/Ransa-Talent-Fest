import React, { useState } from 'react';
import firebase from 'firebase';
import 'firebase/firestore';

const FormPrueba = () => {
  const db = firebase.firestore();

  const [datosFormulario, setDatosFormulario] = useState({
    nombre: null,
    apellido: null,
  });

  const handleInputChange = (e) => {
    setDatosFormulario({
      ...datosFormulario,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    db.collection('prueba').add(datosFormulario);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="nombre" onChange={handleInputChange} />
        <input type="text" name="apellido" onChange={handleInputChange} />
        <button type="submit">ok</button>
      </form>
    </div>
  );
};

export default FormPrueba;
