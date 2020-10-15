/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import Header from '../../components/header/Header';
import '../mainRequest/MainRequest.scss';
import './solicitudOrdenServicio.scss';
import TitleView from '../../components/titleView/TitleView';

const MainRequest = () => (
  <>
    <Header />
    <section className="main-container-solicitud">
      <TitleView texto="Requermiento" />
      <p>Solicitud - Antamina - 12345678</p>
      <div className="flex datos-autocompleted">
        <div className="first-colum">
          <div className="flex">
            <label htmlFor="name">N° Orden de Servicio</label>
            <input type="text" />
          </div>
          <div className="flex">
            <label htmlFor="name">Cliente</label>
            <input type="text" />
          </div>
          <div className="flex">
            <label htmlFor="name">Solicitante</label>
            <input type="text" />
          </div>
          <div className="flex">
            <label htmlFor="name">Tipo de unidad</label>
            <input type="text" />
          </div>
          <div className="flex">
            <label htmlFor="name">Tipo de mercaderia</label>
            <input type="text" />
          </div>
          <div className="flex">
            <label htmlFor="name">Detalle mercaderia</label>
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
            <label htmlFor="name">Fecha de Entrega</label>
            <input
              readOnly="readonly"
              type="text"
              id="name"
            />
          </div>
          <div className="flex">
            <label htmlFor="name">Lugar descarga</label>
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
      <div>
        <p className="form-manual">Selecciona una opcion para poder asignar el pedido</p>
        <div className="container-select">
          <select name="cliente">
            <option>Conductor</option>
          </select>
          <select name="cliente">
            <option>Tracto</option>
          </select>
          <select name="cliente">
            <option>Acoplado</option>
          </select>
        </div>

      </div>
    </section>
  </>
);

export default MainRequest;
