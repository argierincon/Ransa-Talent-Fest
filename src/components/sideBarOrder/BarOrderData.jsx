import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import sr from '../../assets/img/sr.png';
import es from '../../assets/img/es.png';

export const BarOrderData = [
  {
    titulo: 'Requerimientos',
    clase: 'li-nav-text',
  },
  {
    titulo: 'Solicitud de requerimientos',
    ruta: '/solicitud-requerimiento',
    icono: <img src={sr}/>,
    clase: 'nav-text',
  },
  {
    titulo: 'Estatus de solicitudes',
    ruta: '/estatus-solicitudes',
    icono: <img src={es}/>,
    clase: 'nav-text',
  },
  {
    titulo: 'Cerrar sesión',
    ruta: '/cerrarsesion',
    icono: < FaIcons.FaSignOutAlt />,
    clase: 'nav-text',
  },
];
