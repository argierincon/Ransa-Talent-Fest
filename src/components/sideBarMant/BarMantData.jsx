import React from 'react';
import * as FaIcons from 'react-icons/fa';
import truck1 from '../../assets/img/truck1.png';
import truck2 from '../../assets/img/truck2.png';
import rq from '../../assets/img/rq.png';
import cs1 from '../../assets/img/cs1.png';

export default [
  {
    titulo: 'Flota propia',
    clase: 'li-nav-text',
    icono: <img src={rq} alt="camion"  width={'40px'} top={'10px'} position={'relative'}  margin-right={'15px'} />, 
  },
  {
    titulo: 'Habilitación de Unidades',
    ruta: '/verificar-habilitacion-unidades',
    icono: <img src={truck1} alt="camion" width={'58px'} top={'10px'} position={'relative'}  margin-right={'15px'}  />,
    clase: 'nav-text',
  },
  {
    titulo: 'Disponibilidad de Unidades',
    ruta: '/verificar-disponibilidad-unidades',
    icono: <img src={truck2} alt="camion" width={'58px'} top={'10px'} position={'relative'}  margin-right={'15px'}  />,
    clase: 'nav-text',
  },
  {
    titulo: 'Cerrar sesión',
    ruta: '/cerrarsesion',
    icono: <img src={cs1} alt="camion"  width={'40px'} top={'10px'} position={'relative'}  margin-right={'20px'} margin-left={'-9px'} />, 
    clase: 'nav-text-ce',
  },
];
