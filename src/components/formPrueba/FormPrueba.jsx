import React, { useState } from 'react';
import firebase from 'firebase';
import 'firebase/firestore';

import './ModalDetalleAsignacion.scss';

const FormPrueba = () => {
  const db = firebase.firestore();

  const [datosFormulario, setDatosFormulario] = useState({
    placa: null,
    tipo: null,
    razonSocial: 'RANSA COMERCIAL SA',
    revisionTecnica: null,
    soat: null,
    antiguedad: 'VIGENTE',
    camara: 'VIGENTE',
    poliza: 'VIGENTE',
    resolucionMatpel: 'VIGENTE',
    iqbf: 'VIGENTE',
    certificadoMtc: 'VIGENTE',
  });

  const handleInputChange = (e) => {
    setDatosFormulario({
      ...datosFormulario,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    db.collection('vehiculos').add(datosFormulario);
  };

  return (
  // <div>
  //   <form onSubmit={handleSubmit}>
  //     <input
  //       type="text"
  //       placeholder="placa"
  //       name="placa"
  //       onChange={handleInputChange}
  //     />
  //     <input
  //       type="text"
  //       placeholder="tipo"
  //       name="tipo"
  //       onChange={handleInputChange}
  //     />
  //     <input
  //       type="text"
  //       placeholder="revision tecnica"
  //       name="revisionTecnica"
  //       onChange={handleInputChange}
  //     />
  //     <input
  //       type="text"
  //       placeholder="soat"
  //       name="soat"
  //       onChange={handleInputChange}
  //     />
  //     <button type="submit">ok</button>
  //   </form>

    <div classNamme="modal-detalle-asignacion">
      <h3><span>ASIGNACIÓN ORDEN DE SERVICIO:</span></h3>
      <div className="flex">
        <p>Tipo de unidad</p>
        <div className="box-data">dfdsf</div>
      </div>
    </div>
    // </div>
  );
};

export default FormPrueba;
