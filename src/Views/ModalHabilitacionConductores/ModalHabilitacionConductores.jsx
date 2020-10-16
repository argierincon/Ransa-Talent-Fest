/* eslint-disable jsx-a11y/label-has-associated-control */
import React,{ useEffect, useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import { useParams, Link} from 'react-router-dom';
import BarOp from '../../components/sideBarOp/BarOp';

const ModalHabilitacionConductores = () => {

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '330px auto',
      }}
    >
      <BarOp />
      <div className="modal">
        <div className="modal-flex">
          <div className="container-modal comun-card">
            <Link to="/habilitacion-conductores">
              <i className="fas fa-times-circle close" />
            </Link>
            <div className="modal-info">
              <h3 className="titleVehicle">info del conductor </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalHabilitacionConductores;
