/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Link } from 'react-router-dom';
import BarMantC from '../../components/SideBarMantC/BarMantC';
import '../ModalVehicleHabilitacion/ModalVehicle.scss';

const ModalConductor = () => (
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: '330px auto',
    }}
  >
    <BarMantC />
    <div className="modal">
      <div className="modal-flex">
        <div className="container-modal comun-card">
          <Link to="/verificar-habilitacion-conductores">
            <i className="fas fa-times-circle close" />
          </Link>
          <div className="modal-info">
            <h3 className="titleVehicle">Vehiculo placa12345678</h3>
            <div className="flex-container">
              <div className="first-colum">
                <div className="flex">
                  <span className="title-vehicle">N° de placa</span>
                  <div className="info-vehicle"><p>1234567</p></div>
                </div>
                <div className="flex">
                  <span className="title-vehicle">Tipo</span>
                  <div className="info-vehicle"><p>Tipo</p></div>
                </div>
                <div className="flex">
                  <span className="title-vehicle">Razón social</span>
                  <div className="info-vehicle"><p>Tipo</p></div>
                </div>
                <div className="flex">
                  <span className="title-vehicle">Antigüedad</span>
                  <div className="info-vehicle"><p>Tipo</p></div>
                </div>
                <div className="flex">
                  <span className="title-vehicle">Cámara</span>
                  <div className="info-vehicle"><p>Tipo</p></div>
                </div>
                <div className="flex">
                  <span className="title-vehicle">Póliza de seguros</span>
                  <div className="info-vehicle"><p>Tipo</p></div>
                </div>
              </div>
              <div className="second-colum">
                <div className="flex">
                  <span className="title-vehicle">N° de placa</span>
                  <div className="info-vehicle"><p>1234567</p></div>
                </div>
                <div className="flex">
                  <span className="title-vehicle">Tipo</span>
                  <div className="info-vehicle"><p>Tipo</p></div>
                </div>
                <div className="flex">
                  <span className="title-vehicle">Razón social</span>
                  <div className="info-vehicle"><p>Tipo</p></div>
                </div>
                <div className="flex">
                  <span className="title-vehicle">Ambigüedad</span>
                  <div className="info-vehicle"><p>Tipo</p></div>
                </div>
                <div className="flex">
                  <span className="title-vehicle">Cámara</span>
                  <div className="info-vehicle"><p>Tipo</p></div>
                </div>
                <div className="flex">
                  <span className="title-vehicle">Póliza de seguros</span>
                  <div className="info-vehicle"><p>Tipo</p></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ModalConductor;
