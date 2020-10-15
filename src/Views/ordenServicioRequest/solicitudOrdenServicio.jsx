/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import { useParams } from 'react-router-dom';
import Header from '../../components/header/Header';
import '../mainRequest/MainRequest.scss';
import './solicitudOrdenServicio.scss';
import TitleView from '../../components/titleView/TitleView';
import BtnPrimary from '../../components/btnPrimary/BtnPrimary';

const MainRequest = () => {
  const { id } = useParams();
  const db = firebase.firestore();
  const [detailSolicitud, setDetailSolicitud] = useState({});

  useEffect(() => {
    const getSolicitud = async () => {
      db.collection('solicitudes')
        .doc(id)
        .get()
        .then((doc) => {
          setDetailSolicitud(doc.data());
        });
    };
    getSolicitud();
  }, []);

  return (
    <>
      <Header nombre="Moises Carrillo" cargo="supervisor de operaciones" />
      <section className="main-container-solicitud">
        <TitleView texto="Requermiento" />
        <p>
          Solicitud -
          {detailSolicitud.destino}
          {' '}
          -
          {detailSolicitud.ordenServicio}
        </p>
        <div className="flex datos-autocompleted">
          <div className="first-colum">
            <div className="flex">
              <label htmlFor="name">N° Orden de Servicio</label>
              <input type="text" readOnly="readonly" value={detailSolicitud.ordenServicio} />
            </div>
            <div className="flex">
              <label htmlFor="name">Cliente</label>
              <input type="text" readOnly="readonly" value={detailSolicitud.cliente} />
            </div>
            <div className="flex">
              <label htmlFor="name">Solicitante</label>
              <input type="text" readOnly="readonly" value={detailSolicitud.solicitante} />
            </div>
            <div className="flex">
              <label htmlFor="name">Tipo de unidad</label>
              <input type="text" readOnly="readonly" value={detailSolicitud.tipoDeUnidad} />
            </div>
            <div className="flex">
              <label htmlFor="name">Tipo de mercaderia</label>
              <input type="text" readOnly="readonly" value={detailSolicitud.tipoDeMercaderia} />
            </div>
            <div className="flex">
              <label htmlFor="name">Detalle mercaderia</label>
              <textarea
                readOnly="readonly"
                name="datoAdicional"
                value={detailSolicitud.detalleMercaderia}
              />
            </div>
          </div>
          <div className="second-colum">
            <div className="flex">
              <label htmlFor="name">Fecha de carga</label>
              <input
                readOnly="readonly"
                type="text"
                value={detailSolicitud.fechaCarga}
              />
            </div>
            <div className="flex">
              <label htmlFor="name">Hora de carga</label>
              <input
                readOnly="readonly"
                type="text"
                value={detailSolicitud.horaCarga}
              />
            </div>
            <div className="flex">
              <label htmlFor="name">Lugar de carga</label>
              <input
                readOnly="readonly"
                type="text"
                value={detailSolicitud.lugarCarga}
              />
            </div>
            <div className="flex">
              <label htmlFor="name">Fecha de Entrega</label>
              <input
                readOnly="readonly"
                type="text"
                value={detailSolicitud.fechaCarga}
              />
            </div>
            <div className="flex">
              <label htmlFor="name">Lugar descarga</label>
              <input
                readOnly="readonly"
                type="text"
                id="name"
                value={detailSolicitud.lugarDescarga}
              />
            </div>
            <div className="flex">
              <label htmlFor="name">Dato adicional</label>
              <textarea
                readOnly="readonly"
                name="datoAdicional"
                value={detailSolicitud.datoAdicional}
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
        <BtnPrimary texto="Iniciar Sesión" />
      </section>
    </>
  );
};

export default MainRequest;
