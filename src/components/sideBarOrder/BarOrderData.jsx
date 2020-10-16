import React from 'react';
import * as FaIcons from 'react-icons/fa';

import sr from '../../assets/img/sr.png';
import es from '../../assets/img/es.png';

export default [
  {
    titulo: 'Requerimientos',
    clase: 'li-nav-text',
  },
  {
    titulo: 'Solicitud de requerimientos',
    ruta: '/solicitud-requerimiento',
    icono: <img src={sr} alt="camion" />,
    clase: 'nav-text',
  },
  {
    titulo: 'Estatus de solicitudes',
    ruta: '/estatus-solicitudes',
    icono: <img src={es} alt="camion" />,
    clase: 'nav-text',
  },
  {
    titulo: 'Cerrar sesión',
    ruta: '/cerrarsesion',
    icono: <FaIcons.FaSignOutAlt />,
    clase: 'nav-text',
  },
];
