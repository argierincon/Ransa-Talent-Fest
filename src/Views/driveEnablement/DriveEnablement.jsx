import React from 'react';
import Header from '../../components/header/Header';
import TrafficLightRequest from '../../components/trafficLightRequest/TrafficLightRequest';

import descargar from '../../assets/img/descargar.png';

import './DriveEnablement.scss';

const DriveEnablement = () => (
  <>
    <Header />
    <div className="seccion-estados-solicitud">
      <h3>Lista de Vehículos para verificar habilitación</h3>
      <div className="filtros-hab-unidades">
        <div>
          <select className="width-height" name="tipo" id="tipo">
            <option value="tracto">Tracto</option>
            <option value="plataforma">Plataforma</option>
            <option value="camaBaja">Cama baja</option>
          </select>
          <select
            className="width-height"
            name="habilitacion"
            id="habilitacion"
          >
            <option value="habilitado">Habilitado</option>
            <option value="noHabilitado">No habilitado</option>
          </select>
        </div>
      </div>
      <div className="tabla-estatus-solicitud-detail">
        <div className="titulos-tabla grid-tabla-hab-unidades">
          <p>Placa</p>
          <p>Tipo</p>
          <p>Razón social</p>
          <p>IQBF</p>
          <p>Certificado</p>
          <p>Habilitación</p>
          <p> </p>
        </div>
        <div className="linea-bg grid-tabla-hab-unidades item-solic-detalle ">
          <p>DSP884</p>
          <p>Tracto</p>
          <p>Ransa Comercial S.A</p>
          <p>Vigente</p>
          <p>Vigente</p>
          <TrafficLightRequest clase="solicitud-asignada" estado="Asignado" />
          <div className="status-ver-mas">
            <img className="descargar" src={descargar} alt="Descargar" />
            <div className="ver-mas">
              <p>+</p>
            </div>
          </div>
        </div>
        <div className="linea-simple grid-tabla-hab-unidades item-solic-detalle ">
          <p>F0M713</p>
          <p>Plataforma</p>
          <p>Ransa Comercial S.A</p>
          <p>No Vigente</p>
          <p>Vigente</p>
          <TrafficLightRequest
            clase="solicitud-fallida"
            estado="No Habilitado"
          />
          <div className="status-ver-mas">
            <img className="descargar" src={descargar} alt="Descargar" />
            <div className="ver-mas">
              <p>+</p>
            </div>
          </div>
        </div>
        <div className="linea-bg grid-tabla-hab-unidades item-solic-detalle ">
          <p>D7L984</p>
          <p>Tracto</p>
          <p>Ransa Comercial S.A</p>
          <p>Vigente</p>
          <p>Vigente</p>
          <TrafficLightRequest clase="solicitud-asignada" estado="Asignado" />
          <div className="status-ver-mas">
            <img className="descargar" src={descargar} alt="Descargar" />
            <div className="ver-mas">
              <p>+</p>
            </div>
          </div>
        </div>
        <div className="linea-simple grid-tabla-hab-unidades item-solic-detalle ">
          <p>D7L984</p>
          <p>Plataforma</p>
          <p>Ransa Comercial S.A</p>
          <p>Vigente</p>
          <p>No Vigente</p>
          <TrafficLightRequest
            clase="solicitud-fallida"
            estado="No Habilitado"
          />
          <div className="status-ver-mas">
            <img className="descargar" src={descargar} alt="Descargar" />
            <div className="ver-mas">
              <p>+</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default DriveEnablement;
