import React from 'react';
import './ModalVehicle.scss';

const ModalVehicle = () => (
  <div className="modal">
    <div className="modal-flex">
      <div className="container-modal comun-card">
        <i className="fas fa-times-circle close" />
        <div className="modal-info">
          <h3>Eliminar Publicacion</h3>

        </div>
      </div>
    </div>
  </div>
);

export default ModalVehicle;
