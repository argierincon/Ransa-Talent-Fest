import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
import 'firebase/firestore';
import BarMant from '../../components/sideBarMant/BarMant';
import Header from '../../components/header/Header';
import descargar from '../../assets/img/descargar.png';
import './EnableDrive.scss';

const EnableDrive = () => {
  const db = firebase.firestore();
  const [disponibilidadVehiculos, setHabilitarVehiculos] = useState([]);

  useEffect(() => {
    db.collection('vehiculos')
      .get()
      .then((querySnapShot) => {
        querySnapShot.forEach((doc) => {
          const dataVehiculos = doc.data();
          dataVehiculos.id = doc.id;
          disponibilidadVehiculos.push(dataVehiculos);
        });
        setHabilitarVehiculos([...disponibilidadVehiculos]);
      });
  }, []);

  const handleChange = (e) => {
    db.collection('vehiculos')
      .doc(e.target.dataset.id)
      .update({
        estatus: e.target.value,
      })
      .then(() => {
        db.collection('vehiculos')
          .get()
          .then((querySnapShot) => {
            const dispTemp = [];
            querySnapShot.forEach((doc) => {
              const dataVehiculos = doc.data();
              dataVehiculos.id = doc.id;
              dispTemp.push(dataVehiculos);
            });
            setHabilitarVehiculos([...dispTemp]);
          });
      });
  };

  const handleType = (e) => {
    const vehiculosTemp = [];
    if (e.target.value === 'todos') {
      db.collection('vehiculos')
        .get()
        .then((querySnapShot) => {
          querySnapShot.forEach((doc) => {
            const dataVehiculos = doc.data();
            dataVehiculos.id = doc.id;
            vehiculosTemp.push(dataVehiculos);
          });
          setHabilitarVehiculos([...vehiculosTemp]);
        });
    } else {
      db.collection('vehiculos')
        .where('tipo', '==', e.target.value)
        .get()
        .then((querySnapShot) => {
          querySnapShot.forEach((doc) => {
            const dataVehiculos = doc.data();
            dataVehiculos.id = doc.id;
            vehiculosTemp.push(dataVehiculos);
          });
          setHabilitarVehiculos([...vehiculosTemp]);
        });
    }
  };

  const handleDisponiblity = (e) => {
    const vehiculosTemp = [];
    if (e.target.value === 'todos') {
      db.collection('vehiculos')
        .get()
        .then((querySnapShot) => {
          querySnapShot.forEach((doc) => {
            const dataVehiculos = doc.data();
            dataVehiculos.id = doc.id;
            vehiculosTemp.push(dataVehiculos);
          });
          setHabilitarVehiculos([...vehiculosTemp]);
        });
    } else {
      db.collection('vehiculos')
        .where('estatus', '==', e.target.value)
        .get()
        .then((querySnapShot) => {
          querySnapShot.forEach((doc) => {
            const dataVehiculos = doc.data();
            dataVehiculos.id = doc.id;
            vehiculosTemp.push(dataVehiculos);
          });
          setHabilitarVehiculos([...vehiculosTemp]);
        });
    }
  };

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '330px auto',
      }}
    >
      <BarMant />
      <div>
        <Header nombre="Andy Chuco" cargo="Mantenimiento" />
        <div className="seccion-estados-solicitud">
          <h3>Lista de Vehículos para verificar habilitación</h3>
          <div className="filtros-hab-unidades">
            <div>
              <select
                onChange={handleType}
                className="width-height"
                name="tipo"
                id="tipo"
              >
                <option disabled selected>
                  Tipo
                </option>
                <option value="todos">Todos</option>
                <option value="TRACTO">Tracto</option>
                <option value="PLATAFORMA">Plataforma</option>
                <option value="CAMA BAJA">Cama baja</option>
              </select>
              <select
                onChange={handleDisponiblity}
                className="width-height"
                name="habilitacion"
                id="habilitacion"
              >
                <option disabled selected>
                  Habilitacion
                </option>
                <option value="todos">Todos</option>
                <option value="HABILITADO">Habilitado</option>
                <option value="NO HABILITADO">No habilitado</option>
              </select>
            </div>
          </div>
          <div className="tabla-estatus-solicitud-detail">
            <div className="titulos-tabla grid-tabla-verif-disp-unidades">
              <p>Placa</p>
              <p>Tipo</p>
              <p>Razón social</p>
              <p>Revisión Técnica</p>
              <p>SOAT</p>
              <p>Habilitación</p>
              <p> </p>
            </div>
            {disponibilidadVehiculos.length > 0 ? (
              disponibilidadVehiculos.map((vehiculo) => (
                <div
                  key={vehiculo.id}
                  className="fila grid-tabla-verif-disp-unidades item-solic-detalle "
                >
                  <p>{vehiculo.placa}</p>
                  <p>{vehiculo.tipo}</p>
                  <p>{vehiculo.razonSocial}</p>
                  <p>{vehiculo.revisionTecnica}</p>
                  <p>{vehiculo.soat}</p>
                  <select
                    value={vehiculo.estatus}
                    onChange={handleChange}
                    data-id={vehiculo.id}
                    className="select-hab-unidades width-height"
                    name="disponibilidad"
                    id="disponibilidad"
                  >
                    <option value="HABILITADO">Habilitado</option>
                    <option value="NO HABILITADO">No Habilitado</option>
                  </select>
                  <div className="status-ver-mas margin-left-2rem">
                    <img
                      className="descargar"
                      src={descargar}
                      alt="Descargar"
                    />
                    <div className="ver-mas">
                      <p>+</p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <h4 className="fila item-solic-detalle failed-load-data">
                No se encontraron registros
              </h4>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default EnableDrive;
