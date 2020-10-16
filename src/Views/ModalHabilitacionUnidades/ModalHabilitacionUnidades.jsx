/* eslint-disable jsx-a11y/label-has-associated-control */
import React,{ useEffect, useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import { useParams, Link} from 'react-router-dom';
import BarOp from '../../components/sideBarOp/BarOp';
import './ModalVehicle.scss';

const ModalVehicle = () => {
  const { id } = useParams();
  const db = firebase.firestore();

  const [vehiculo, setVehiculo] = useState({});
  useEffect(() => {
    const getSolicitud = async () => {
      db.collection('vehiculos')
        .doc(id)
        .get()
        .then((doc) => {
          setVehiculo(doc.data());
        });
    };
    getSolicitud();
  }, []);

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
            <Link to="/habilitacion-unidades">
              <i className="fas fa-times-circle close" />
            </Link>
            <div className="modal-info">
              <h3 className="titleVehicle">Vehiculo placa {vehiculo.placa}</h3>
              <div className="flex-container">
                <div className="first-colum">
                  <div className="flex">
                    <span className="title-vehicle">N° de placa</span>
                    <div className="info-vehicle"><p>{vehiculo.placa}</p></div>
                  </div>
                  <div className="flex">
                    <span className="title-vehicle">Tipo</span>
                  <div className="info-vehicle"><p>{vehiculo.tipo}</p></div>
                  </div>
                  <div className="flex">
                    <span className="title-vehicle">Razón social</span>
                    <div className="info-vehicle"><p>{vehiculo.razonSocial}</p></div>
                  </div>
                  <div className="flex">
                    <span className="title-vehicle">Antigüedad</span>
                    <div className="info-vehicle"><p>{vehiculo.antiguedad}</p></div>
                  </div>
                  <div className="flex">
                    <span className="title-vehicle">Cámara</span>
                    <div className="info-vehicle"><p>{vehiculo.camara}</p></div>
                  </div>
                  <div className="flex">
                    <span className="title-vehicle">Póliza de seguros</span>
                    <div className="info-vehicle"><p>{vehiculo.poliza}</p></div>
                  </div>
                </div>
                <div className="second-colum">
                  <div className="flex">
                    <span className="title-vehicle">Revision tecnica Matpel</span>
                    <div className="info-vehicle"><p>{vehiculo.revisionTecnica}</p></div>
                  </div>
                  <div className="flex">
                    <span className="title-vehicle">Resolucion MATPEL-MTC</span>
                    <div className="info-vehicle"><p>{vehiculo.resolucionMatpel}</p></div>
                  </div>
                  <div className="flex">
                    <span className="title-vehicle">SOAT</span>
                    <div className="info-vehicle"><p>{vehiculo.soat}</p></div>
                  </div>
                  <div className="flex">
                    <span className="title-vehicle">IQBF</span>
                    <div className="info-vehicle"><p>{vehiculo.iqbf}</p></div>
                  </div>
                  <div className="flex">
                    <span className="title-vehicle">Certificado MTC</span>
                    <div className="info-vehicle"><p>{vehiculo.certificadoMtc}</p></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalVehicle;
