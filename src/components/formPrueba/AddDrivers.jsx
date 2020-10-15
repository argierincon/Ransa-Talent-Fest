import React, { useState } from 'react';
import firebase from 'firebase';
import 'firebase/firestore';

const AddDrivers = () => {
  const db = firebase.firestore();

  const [datosFormulario, setDatosFormulario] = useState({
    razonSocial: 'RANSA COMERCIAL SA',
    flota: 'RECURSO PROPIO',
    req1: 'APTO MÉDICO',
    req2: 'PRIMEROS AUXILIOS BÁSICO',
    req2Emisor: 'IFSEC',
    req16: 'BREVETE',
    nombre: null,
    habilitado: null,
    req1Emisor: null,
    req1FechaExamen: null,
    req1FechaCaducidad: null,
    req1Estus: null,
    req2FechaCaducidad: null,
    req2Estus: 'OK',
    req16FechaCaducidad: '31/10/2020',
    req16Estus: 'POR VENCER',
  });

  const handleInputChange = (e) => {
    setDatosFormulario({
      ...datosFormulario,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    db.collection('conductores').add(datosFormulario);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="nombre" name="nombre" onChange={handleInputChange} />
        <input type="text" placeholder="habilitado" name="habilitado" onChange={handleInputChange} />
        <input type="text" placeholder="req1Emisor" name="req1Emisor" onChange={handleInputChange} />
        <input type="text" placeholder="req1FechaExamen" name="req1FechaExamen" onChange={handleInputChange} />
        <input type="text" placeholder="req1FechaCaducidad" name="req1FechaCaducidad" onChange={handleInputChange} />
        <input type="text" placeholder="req1Estus" name="req1Estus" onChange={handleInputChange} />
        <input type="text" placeholder="req2FechaCaducidad" name="req2FechaCaducidad" onChange={handleInputChange} />
        {/* <input type="text" placeholder="req2Es
        tus" name="req2Estus" onChange={handleInputChange} /> */}
        {/* <input type="text" placeholder="
        req16FechaCaducidad" name="req16FechaCaducidad" onChange={handleInputChange} /> */}
        <button type="submit">ok</button>
      </form>
    </div>
  );
};

export default AddDrivers;
