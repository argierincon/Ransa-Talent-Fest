import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import truck1 from '../../assets/img/truck1.png';
import truck2 from '../../assets/img/truck2.png';

export const BarMantData = [
  {
    titulo: 'Flota propia',
    clase: 'li-nav-text',
  },
  {
    titulo: 'Habilitación de Unidades',
    ruta: '/verificar-habilitacion-unidades',
    icono: <img src={truck1} />,
    clase: 'nav-text',
  },
  {
    titulo: 'Disponibilidad de Unidades',
    ruta: '/verificar-disponibilidad-unidades',
    icono: <img src={truck2} />,
    clase: 'nav-text',
  },
  {
    titulo: 'Cerrar sesión',
    ruta: '/cerrarsesion',
    icono: < FaIcons.FaSignOutAlt />,
    clase: 'nav-text',
  },
];
