/* eslint-disable max-len */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import moment from 'moment';
import 'moment/locale/es';
import Header from '../../components/header/Header';
import TitleView from '../../components/titleView/TitleView';
import BtnPrimary from '../../components/btnPrimary/BtnPrimary';
import './MainRequest.scss';
import BarOrder from '../../components/sideBarOrder/BarOrder';

const MainRequest = () => {
  const [clientes, setClientes] = useState([]);
  const [cliente, setCliente] = useState(-1);
  const [servicios, setServicios] = useState([]);
  const [selectService, setSelectService] = useState('');
  const db = firebase.firestore();

  const [datosSolicitud, setDatosSolicitud] = useState({
    cliente,
    ordenServicio: selectService,
    fechaCarga: null,
    horaCarga: null,
    detalleMercaderia: null,
    lugarCarga: null,
    datoAdicional: null,
    lugarDescarga: null,
    date: moment(Date.now()).format('L'),
  });

  useEffect(() => {
    const obtenerClientes = async () => {
      try {
        const data = await db.collection('clientes').get();
        const arrayData = data.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setClientes(arrayData);
      } catch (error) {
        console.log(error);
      }
    };
    obtenerClientes();
  }, []);
  useEffect(() => {
    const obtenerServicios = async () => {
      try {
        const data = await db.collection('servicios').get();
        const arrayData = data.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setServicios(arrayData);
      } catch (error) {
        console.log(error);
      }
    };
    obtenerServicios();
  }, []);

  const filterservicio = (arr, id) => {
    const arreglo = arr.filter((item) => item.id === id);
    return arreglo[0];
  };

  const handleServicios = (e) => {
    const rpta = filterservicio(servicios, e.target.value);
    setSelectService(rpta);
    setDatosSolicitud({
      ...rpta,
      ...datosSolicitud,
      [e.target.name]: e.target.value,
    });
  };
  const handleCliente = (e) => {
    setCliente(e.target.value);
    setDatosSolicitud({
      ...datosSolicitud,
      [e.target.name]: clientes[Number(e.target.value)].razonSocial,
    });
  };

  const handleInputChange = (e) => {
    setDatosSolicitud({
      ...datosSolicitud,
      [e.target.name]: e.target.value,
    });
  };

  const resetForm = () => {
    document.querySelectorAll('input').forEach((inpt) => {
      // eslint-disable-next-line no-param-reassign
      inpt.value = '';
    });
    document.querySelectorAll('textarea').forEach((inpt) => {
      // eslint-disable-next-line no-param-reassign
      inpt.value = '';
    });
    document.querySelectorAll('select').forEach((inpt) => {
      // eslint-disable-next-line no-param-reassign
      inpt.value = '';
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    db.collection('solicitudes')
      .add(datosSolicitud)
      .then(() => {
        resetForm();
      });
  };

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '330px auto',
      }}
    >
      <BarOrder />
      <div>
        <Header nombre="Cristian Narcizo" cargo="Supervisor de Operaciones" />
        <section className="main-container-solicitud">
          <TitleView texto="Solicitud de Requerimientos - Almacenes" />
          <form onSubmit={handleSubmit}>
            <div>
              <p>Generar Pedido</p>
              <div className="select">
                <select name="cliente" onChange={handleCliente}>
                  <option value={-1} disabled selected>
                    Seleccione cliente
                  </option>
                  {clientes.map((client, index) => (
                    <option key={client.id} value={index}>
                      {client.razonSocial}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div>
              <label className="ordenServicio" htmlFor="name">
                N° Orden de Servicio
              </label>
              <select name="ordenServicio" onChange={handleServicios}>
                <option disabled selected>
                  Seleccione
                </option>
                {Number(cliente) > -1
                  && clientes[Number(cliente)].servicios.map((element) => (
                    <option key={element} value={element}>
                      {element}
                    </option>
                  ))}
              </select>
            </div>

            <div className="flex datos-autocompleted">
              <div className="first-colum">
                <div className="flex">
                  <label htmlFor="name">Tipo de unidad</label>
                  <input
                    type="text"
                    readOnly="readonly"
                    name="tipoUnidad"
                    value={selectService.tipoDeUnidad}
                  />
                </div>
                <div className="flex">
                  <label htmlFor="name">Tipo de mercaderia</label>
                  <input
                    type="text"
                    readOnly="readonly"
                    name="tipoMercaderia"
                    value={selectService.tipoDeMercaderia}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="second-colum">
                <div className="flex">
                  <label htmlFor="name">Origen</label>
                  <input
                    readOnly="readonly"
                    type="text"
                    name="origen"
                    value={selectService.origen}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="flex">
                  <label htmlFor="name">Destino</label>
                  <input
                    readOnly="readonly"
                    type="text"
                    name="destino"
                    value={selectService.destino}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
            <hr />

            <p className="form-manual">
              Completa los datos del formulario para poder crear la solicitud
            </p>

            <div className="flex">
              <div className="first-colum">
                <div className="flex">
                  <label htmlFor="name">Fecha de carga</label>
                  <input
                    type="date"
                    name="fechaCarga"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="flex">
                  <label htmlFor="name">Hora de carga</label>
                  <input
                    type="time"
                    name="horaCarga"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="flex">
                  <label htmlFor="name">Lugar de carga</label>
                  <input
                    ttype="text"
                    name="lugarCarga"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="flex">
                  <label htmlFor="name">Lugar de descarga</label>
                  <input
                    type="text"
                    name="lugarDescarga"
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="second-colum">
                <div className="flex">
                  <label htmlFor="name">Detalle mercaderia</label>
                  <textarea
                    className="prueba"
                    name="detalleMercaderia"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="flex">
                  <label htmlFor="name">Dato adicional</label>
                  <textarea name="datoAdicional" onChange={handleInputChange} />
                </div>
              </div>
            </div>
            <BtnPrimary texto="Solicitar" />
          </form>
        </section>
      </div>
    </div>
  );
};
export default MainRequest;
