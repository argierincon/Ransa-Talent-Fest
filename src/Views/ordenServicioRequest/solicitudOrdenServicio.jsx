/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import Header from '../../components/header/Header';
import '../mainRequest/MainRequest.scss';
import BarOp from '../../components/sideBarOp/BarOp';

const MainRequest = () => (
  <>
    <Header />
    <BarOp/>
    <section className="main-container-solicitud">
      <h2>Solicitudes de Orden de Servicio</h2>

      <p>Cliente -Antamina - 12345678</p>
      <div className="flex datos-autocompleted">
        <div className="firs-colum">
          <div className="flex">
            <label htmlFor="name">N° Orden de Servicio</label>
            <input type="text" name="fechaCarga" />
          </div>
          <div className="flex">
            <label htmlFor="name">Cliente</label>
            <input type="text" name="fechaCarga" />
          </div>
          <div className="flex">
            <label htmlFor="name">Solicitante</label>
            <input type="text" name="fechaCarga" />
          </div>
          <div className="flex">
            <label htmlFor="name">Tipo de unidad</label>
            <input type="text" name="fechaCarga" />
          </div>
          <div className="flex">
            <label htmlFor="name">Tipo de mercaderia</label>
            <input type="text" name="fechaCarga" />
          </div>
          <div className="flex">
            <label htmlFor="name">Detalle de mercaderia</label>
            <textarea
              name="datoAdicional"
            />
          </div>
        </div>
        <div className="second-colum">
          <div className="flex">
            <label htmlFor="name">Fecha de carga</label>
            <input
              type="text"
              id="name"
            />
          </div>
          <div className="flex">
            <label htmlFor="name">Hora de carga</label>
            <input
              readOnly="readonly"
              type="text"
              id="name"
            />
          </div>
          <div className="flex">
            <label htmlFor="name">Lugar de carga</label>
            <input
              readOnly="readonly"
              type="text"
              id="name"
            />
          </div>
          <div className="flex">
            <label htmlFor="name">Lugar de carga</label>
            <input
              readOnly="readonly"
              type="text"
              id="name"
            />
          </div>
          <div className="flex">
            <label htmlFor="name">Destino</label>
            <input
              readOnly="readonly"
              type="text"
              id="name"
              value="Arequipa"
            />
          </div>
          <div className="flex">
            <label htmlFor="name">Dato adicional</label>
            <textarea
              name="datoAdicional"
            />
          </div>
        </div>
      </div>
      <hr />
    </section>
  </>
);

export default MainRequest;
