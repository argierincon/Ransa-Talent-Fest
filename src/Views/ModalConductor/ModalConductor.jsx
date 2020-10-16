/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/firestore';
import BarMantC from '../../components/SideBarMantC/BarMantC';
import '../modalVehicleInformation/ModalVehicleInformation.scss';
import './ModalConductor.scss';

const ModalConductor = () => {
  const { id } = useParams();
  const db = firebase.firestore();

  const [conductor, setConductor] = useState({});

  useEffect(() => {
    const getSolicitud = async () => {
      db.collection('conductores')
        .doc(id)
        .get()
        .then((doc) => {
          setConductor(doc.data());
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
      <BarMantC />
      <div className="modal">
        <div className="modal-flex">
          <div className="container-modal comun-card">
            <Link to="/verificar-habilitacion-conductores">
              <i className="fas fa-times-circle close" />
            </Link>
            <div className="modal-info">
              <div className="container-status">
                <div className="estatus">
                  <span className="verde"><i className="fas fa-circle" /></span>
                  <p>Ok</p>
                </div>
                <div className="estatus">
                  <span className="amarillo"><i className="fas fa-circle" /></span>
                  <p>Por vencer</p>
                </div>
                <div className="estatus">
                  <span className="rojo"><i className="fas fa-circle" /></span>
                  <p>Vencido</p>
                </div>
              </div>
              <h3 className="titleVehicle">
                CONDUCTOR -
                {' '}
                {conductor.nombre}
              </h3>
              <div className="container-datos">
                <div className="estatus">
                  <span>DNI</span>
                  <div className="info-vehicle"><p>{conductor.dni}</p></div>
                </div>
                <div className="estatus">
                  <span>Razón Social</span>
                  <div className="info-vehicle"><p>{conductor.razonSocial}</p></div>
                </div>
                <div className="estatus">
                  <span>Flota</span>
                  <div className="info-vehicle"><p>{conductor.flota}</p></div>
                </div>
              </div>
              <div className="container-table">

                <table>
                  <tr>
                    <td>REQ #1</td>
                    <td>{conductor.req1}</td>
                  </tr>
                  <tr>
                    <td>Estado</td>
                    <td>
                      <select name="ordenServicio">
                        <option disabled selected>
                          Seleccione
                        </option>
                        <option> ok </option>
                        <option> por vencer </option>
                        <option> vencido </option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td>Fecha de caducidad</td>
                    <td>
                      <input
                        type="date"
                        name="fechaCarga"
                      />
                    </td>
                  </tr>
                </table>
                <table>
                  <tr>
                    <td>REQ #2</td>
                    <td>{conductor.req2}</td>
                  </tr>
                  <tr>
                    <td>Estado</td>
                    <td>
                      <select name="ordenServicio">
                        <option disabled selected>
                          Seleccione
                        </option>
                        <option> ok </option>
                        <option> por vencer </option>
                        <option> vencido </option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td>Fecha de caducidad</td>
                    <td>
                      <input
                        type="date"
                        name="fechaCarga"
                      />
                    </td>
                  </tr>
                </table>
                <table>
                  <tr>
                    <td>REQ #16</td>
                    <td>{conductor.req16}</td>
                  </tr>
                  <tr>
                    <td>Estado</td>
                    <td>
                      <select name="ordenServicio">
                        <option disabled selected>
                          Seleccione
                        </option>
                        <option> ok </option>
                        <option> por vencer </option>
                        <option> vencido </option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td>Fecha de caducidad</td>
                    <td>
                      <input
                        type="date"
                        name="fechaCarga"
                      />
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ModalConductor;
