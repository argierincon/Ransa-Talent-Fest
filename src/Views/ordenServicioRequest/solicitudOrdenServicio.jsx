/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import Swal from 'sweetalert2';
import { useParams } from 'react-router-dom';
import Header from '../../components/header/Header';
import '../mainRequest/MainRequest.scss';
import './solicitudOrdenServicio.scss';
import TitleView from '../../components/titleView/TitleView';
import BtnPrimary from '../../components/btnPrimary/BtnPrimary';
import BarOp from '../../components/sideBarOp/BarOp';
import user1 from '../../assets/img/user.png';

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
          temp.push(dataVehiculos.placaAcoplado);
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
    Swal.fire({
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Yes_Check_Circle.svg/1200px-Yes_Check_Circle.svg.png',
      imageHeight: 120,
      confirmButtonColor: '#009A3F',
      text: 'Asignación exitosa',
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
        <Header nombre="Moises Carrillo" cargo="supervisor de operaciones" image={user1} />
        <section className="main-container-solicitud">
          <TitleView texto="Requerimiento" />
          <p>
            Solicitud -
            {' '}
            {detailSolicitud.destino}
            {' '}
            -
            {' '}
            {' '}
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
                <div className="select-asign">
                  <p>Conductor</p>
                  <select name="conductor" onChange={selectAsignar}>
                    <option selected disabled>
                      Conductor
                    </option>
                    {conductor.map((ele) => (
                      <option value={ele}>{ele}</option>
                    ))}
                  </select>
                </div>

                <div className="select-asign">
                  <p>Tracto</p>
                  <select name="placa" onChange={selectAsignar}>
                    <option selected disabled>
                      Tracto
                    </option>
                    {tracto.map((ele) => (
                      <option value={ele}>{ele}</option>
                    ))}
                  </select>
                </div>

                <div className="select-asign">
                  <p>Acoplado</p>
                  <select name="placaAcoplado" onChange={selectAsignar}>
                    <option selected disabled>
                      Acoplado
                    </option>
                    {acoplado.map((ele) => (
                      <option value={ele}>{ele}</option>
                    ))}
                  </select>
                </div>
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
