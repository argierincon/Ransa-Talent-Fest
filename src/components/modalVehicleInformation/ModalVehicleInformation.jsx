import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
import 'firebase/firestore';

import './ModalVehicleInformation.scss';

const ModalVehicleInformation = () => {
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

  return (
    <div className="contenedor-modal">
      <h4>VEHÍCULO - PLACA D7L984</h4>
      <div className="contenedor-items-modal">
        <div className="columna-modal">
          {disponibilidadVehiculos.map((vehiculo) => (
            <div>
              <p>vehiculo</p>
              <div>
                <p>D7L984</p>
              </div>
            </div>
          ))}
        </div>

        <div className="columna-modal">
          <div>
            <p>N° Placa</p>
            <div>
              <p>D7L984</p>
            </div>
          </div>
          <div>
            <p>N° Placa</p>
            <div>
              <p>D7L984</p>
            </div>
          </div>
          <div>
            <p>N° Placa</p>
            <div>
              <p>D7L984</p>
            </div>
          </div>
          <div>
            <p>N° Placa</p>
            <div>
              <p>D7L984</p>
            </div>
          </div>
          <div>
            <p>N° Placa</p>
            <div>
              <p>D7L984</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalVehicleInformation;
