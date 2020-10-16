import React from 'react';
import * as FaIcons from 'react-icons/fa';

import truck1 from '../../assets/img/truck1.png';
import truck2 from '../../assets/img/truck2.png';

export default [
  {
    titulo: 'Flota propia',
    clase: 'li-nav-text',
  },
  {
    titulo: 'Habilitación de Conductores',
    ruta: '/verificar-habilitacion-conductores',
    icono: <img src={truck1} alt="camion" />,
    clase: 'nav-text',
  },
  {
    titulo: 'Disponibilidad de Conductores',
    ruta: '/verificar-disponibilidad-conductores',
    icono: <img src={truck2} alt="camion" />,
    clase: 'nav-text',
  },
  {
    titulo: 'Cerrar sesión',
    ruta: '/cerrarsesion',
    icono: <FaIcons.FaSignOutAlt />,
    clase: 'nav-text',
  },
];
