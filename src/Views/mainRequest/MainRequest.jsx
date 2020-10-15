/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import FormSolicitud from '../../components/formSolicitud/FormSolicitud';
import Header from '../../components/header/Header';
import TitleView from '../../components/titleView/TitleView';
import './MainRequest.scss';

const MainRequest = () => (
  <>
    <Header />
    <section className="main-container-solicitud">
      <TitleView texto="Solicitud de Requerimientos - Almacenes" />
      <div>
        <p>Generar Pedido</p>
        <select name="select">
          <option value="value1">Value 1</option>
          <option value="value2">Value 2</option>
          <option value="value3">Value 3</option>
        </select>
      </div>

      <p>Cliente -Antamina</p>
      <div className="flex datos-autocompleted">
        <div className="firs-colum">
          <div className="flex">
            <label htmlFor="name">N° Orden de Servicio</label>
            <select name="select">
              <option value="value1">Value 1</option>
              <option value="value2">Value 2</option>
              <option value="value3">Value 3</option>
            </select>
          </div>
          <div className="flex">
            <label htmlFor="name">Tipo de unidad</label>
            <input
              type="text"
              id="name"
              readOnly="readonly"
            />
          </div>
          <div className="flex">
            <label htmlFor="name">Tipo de mercaderia</label>
            <input
              type="text"
              id="name"
              readOnly="readonly"
            />
          </div>
        </div>
        <div className="second-colum">
          <div className="flex">
            <label htmlFor="name">Cliente</label>
            <input
              readOnly="readonly"
              type="text"
              id="name"
            />
          </div>
          <div className="flex">
            <label htmlFor="name">Origen</label>
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
        </div>
      </div>
      <hr />
      <p className="form-manual">Completa los datos del formulario para poder crear la solicitud</p>
      <FormSolicitud />
    </section>
  </>
);

export default MainRequest;
