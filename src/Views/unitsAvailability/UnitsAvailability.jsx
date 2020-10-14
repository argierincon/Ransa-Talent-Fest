import React from 'react';
import Header from '../../components/header/Header';
import TrafficLightRequest from '../../components/trafficLightRequest/TrafficLightRequest';

import './UnitsAvailability.scss';

const UnitsAvailability = () => (
  <>
    <Header />
    <div className="seccion-estados-solicitud">
      <h3>Lista de Vehículos para verificar disponibilidad</h3>
      <div className="filtros-hab-unidades">
        <div>
          <select className="width-height" name="tipo" id="tipo">
            <option value="tipo">Tipo</option>
            <option value="tracto">Tracto</option>
            <option value="plataforma">Plataforma</option>
            <option value="camaBaja">Cama baja</option>
          </select>
          <select
            className="width-height"
            name="habilitacion"
            id="habilitacion"
          >
            <option value="disponibilidad">Disponibilidad</option>
            <option value="habilitado">Habilitado</option>
            <option value="noHabilitado">No habilitado</option>
          </select>
        </div>
      </div>
      <div className="tabla-estatus-solicitud-detail">
        <div className="titulos-tabla grid-tabla-disp-unidades">
          <p>Placa</p>
          <p>Tipo</p>
          <p>Razón social</p>
          <p>Revisión Técnica</p>
          <p>SOAT</p>
          <p>Disponibilidad</p>
          <p> </p>
        </div>
        <div className="linea-bg grid-tabla-disp-unidades item-solic-detalle ">
          <p>DSP884</p>
          <p>Tracto</p>
          <p>Ransa Comercial S.A</p>
          <p>Vigente</p>
          <p>Vigente</p>
          <div className="status-ver-mas margin-left-2rem space-evenly">
            <TrafficLightRequest
              clase="solicitud-asignada"
              estado="Disponible"
            />
            <div className="ver-mas">
              <p>+</p>
            </div>
          </div>
        </div>
        <div className="linea-simple grid-tabla-disp-unidades item-solic-detalle ">
          <p>F0M713</p>
          <p>Plataforma</p>
          <p>Ransa Comercial S.A</p>
          <p>No Vigente</p>
          <p>Vigente</p>
          <div className="status-ver-mas margin-left-2rem space-evenly">
            <TrafficLightRequest
              clase="solicitud-asignada"
              estado="Disponible"
            />
            <div className="ver-mas">
              <p>+</p>
            </div>
          </div>
        </div>
        <div className="linea-bg grid-tabla-disp-unidades item-solic-detalle ">
          <p>D7L984</p>
          <p>Tracto</p>
          <p>Ransa Comercial S.A</p>
          <p>Vigente</p>
          <p>Vigente</p>
          <div className="status-ver-mas margin-left-2rem space-evenly">
            <TrafficLightRequest
              clase="solicitud-asignada"
              estado="Disponible"
            />
            <div className="ver-mas">
              <p>+</p>
            </div>
          </div>
        </div>
        <div className="linea-simple grid-tabla-disp-unidades item-solic-detalle ">
          <p>D7L984</p>
          <p>Plataforma</p>
          <p>Ransa Comercial S.A</p>
          <p>Vigente</p>
          <p>No Vigente</p>
          <div className="status-ver-mas margin-left-2rem space-evenly">
            <TrafficLightRequest
              clase="solicitud-fallida"
              estado="No Disponible"
            />
            <div className="ver-mas">
              <p>+</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default UnitsAvailability;
