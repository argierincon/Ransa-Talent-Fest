import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import file from '../../assets/img/files.png';
import truck1 from '../../assets/img/truck1.png';
import truck2 from '../../assets/img/truck2.png';
import hc from '../../assets/img/hc.png';
import dc from '../../assets/img/dc.png';

export const BarOpData = [
  {
    titulo: 'Solicitudes',
    ruta: '/orden-servicio',
    icono: <img src={file} />,
    clase: 'nav-text',
  },
  {
    titulo: 'Flota Propia',
    clase: 'li-nav-text',
  },
  {
    titulo: 'Habilitación de unidades',
    ruta: '/habilitacion-unidades',
    icono: <img src={truck1} />,
    clase: 'nav-text',
  },
  {
    titulo: 'Disponibilidad de Unidades',
    ruta: '/disponibilidad-unidades',
    icono: <img src={truck2} />,
    clase: 'nav-text',
  },
  {
    titulo: 'Habilitación de conductores',
    ruta: '/habilitacion-conductores',
    icono: <img src={hc}/>,
    clase: 'nav-text',
  },
  {
    titulo: 'Disponibilidad de conductores',
    ruta: '/disponibilidad-conductores',
    icono: <img src={dc}  />,
    clase: 'nav-text',
  },
  {
    titulo: 'Flota Tercera',
    clase: 'li-nav-text',
  },
  {
    titulo: 'Habilitación de unidades',
    ruta: '/habilitacion-unidades-ext',
    icono: <img src={truck1} />,
    clase: 'nav-text',
  },
  {
    titulo: 'Disponibilidad de Unidades',
    ruta: '/disponibilidad-unidades-ext',
    icono: <img src={truck2} />,
    clase: 'nav-text',
  },
  {
    titulo: 'Habilitación de conductores',
    ruta: '/disponibilidad-conductores-ext',
    icono: <img src={hc} />,
    clase: 'nav-text',
  },
  {
    titulo: 'Disponibilidad de conductores',
    ruta: '/disponibilidad-conductores-ext',
    icono: <img src={dc} />,
    clase: 'nav-text',
  },
  {
    titulo: 'Cerrar sesión',
    ruta: '/cerrarsesion',
    icono: < FaIcons.FaSignOutAlt />,
    clase: 'nav-text',
  },
];
