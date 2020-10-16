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
import BarOp from '../../components/sideBarOp/BarOp';

const MainRequest = () => {
  const { id } = useParams();
  const db = firebase.firestore();

  const [conductor, setConductor] = useState([]);
  const [tracto, setTracto] = useState([]);
  const [acoplado, setAcoplado] = useState([]);
  const [detailSolicitud, setDetailSolicitud] = useState({});
  const [payload, setPayload] = useState({});

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

  useEffect(() => {
    const temp = [];
    const temp1 = [];
    db.collection('vehiculos')
      .get()
      .then((querySnapShot) => {
        querySnapShot.forEach((doc) => {
          const dataVehiculos = doc.data();
          dataVehiculos.id = doc.id;
          temp.push(dataVehiculos.tipo);
          temp1.push(dataVehiculos.placa);
        });
        setAcoplado([...new Set(temp)]);
        setTracto([...new Set(temp1)]);
      });
  }, []);

  useEffect(() => {
    const temp = [];
    db.collection('conductores')
      .where('habilitado', '==', 'HABILITADO')
      .where('disponible', '==', 'true')
      .get()
      .then((querySnapShot) => {
        querySnapShot.forEach((doc) => {
          const dataConductor = doc.data();
          dataConductor.id = doc.id;
          temp.push(dataConductor.nombre);
        });
        setConductor([...new Set(temp)]);
      });
  }, []);

  const selectAsignar = (e) => {
    setPayload({
      ...payload,
      [e.target.name]: e.target.value,
    });
  };

  const submitAsignar = (e) => {
    e.preventDefault();
    db.collection('solicitudes')
      .doc(id)
      .update({
        ...payload,
        status: 'true',
      });
  };

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '330px auto',
      }}
    >
      <BarOp />
      <div>
        <Header nombre="Moises Carrillo" cargo="supervisor de operaciones" />
        <section className="main-container-solicitud">
          <TitleView texto="Requermiento" />
          <p>
            Solicitud -{detailSolicitud.destino} -
            {detailSolicitud.ordenServicio}
          </p>
          <div className="flex datos-autocompleted">
            <div className="first-colum">
              <div className="flex">
                <label htmlFor="name">N° Orden de Servicio</label>
                <input
                  type="text"
                  readOnly="readonly"
                  value={detailSolicitud.ordenServicio}
                />
              </div>
              <div className="flex">
                <label htmlFor="name">Cliente</label>
                <input
                  type="text"
                  readOnly="readonly"
                  value={detailSolicitud.cliente}
                />
              </div>
              <div className="flex">
                <label htmlFor="name">Solicitante</label>
                <input
                  type="text"
                  readOnly="readonly"
                  value={detailSolicitud.solicitante}
                />
              </div>
              <div className="flex">
                <label htmlFor="name">Tipo de unidad</label>
                <input
                  type="text"
                  readOnly="readonly"
                  value={detailSolicitud.tipoDeUnidad}
                />
              </div>
              <div className="flex">
                <label htmlFor="name">Tipo de mercaderia</label>
                <input
                  type="text"
                  readOnly="readonly"
                  value={detailSolicitud.tipoDeMercaderia}
                />
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
            <p className="form-manual">
              Selecciona una opcion para poder asignar el pedido
            </p>
            <form onSubmit={submitAsignar}>
              <div className="container-select">
                <select name="conductor" onChange={selectAsignar}>
                  <option selected disabled>
                    Conductor
                  </option>
                  {conductor.map((ele) => (
                    <option value={ele}>{ele}</option>
                  ))}
                </select>
                <select name="placa" onChange={selectAsignar}>
                  <option selected disabled>
                    Tracto
                  </option>
                  {tracto.map((ele) => (
                    <option value={ele}>{ele}</option>
                  ))}
                </select>
                <select name="tipo" onChange={selectAsignar}>
                  <option selected disabled>
                    Acoplado
                  </option>
                  {acoplado.map((ele) => (
                    <option value={ele}>{ele}</option>
                  ))}
                </select>
              </div>
              <BtnPrimary texto="Asignar" />
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MainRequest;
