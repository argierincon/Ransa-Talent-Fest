import React from 'react';
import * as FaIcons from 'react-icons/fa';

import sr from '../../assets/img/sr.png';
import es from '../../assets/img/es.png';

import rq from '../../assets/img/rq.png';
import cs1 from '../../assets/img/cs1.png';

export default [
  {
    titulo: 'Requerimientos',
    clase: 'li-nav-text',
    icono: <img src={rq} alt="camion"  width={'40px'} top={'10px'} position={'relative'}  margin-right={'15px'} />, 
  },
  {
    titulo: 'Solicitud de requerimientos',
    ruta: '/solicitud-requerimiento',
    icono: <img src={sr} alt="camion"  width={'55px'} top={'10px'} position={'relative'}  margin-right={'15px'} />, 
    clase: 'nav-text',
  },
  {
    titulo: 'Estatus de solicitudes',
    ruta: '/estatus-solicitudes',
    icono: <img src={es} alt="camion" width={'55px'}  top={'10px'} position={'relative'}  margin-right={'15px'} />,
    clase: 'nav-text',
  },
  {
    titulo: 'Cerrar sesión',
    ruta: '/cerrarsesion',
    icono: <img src={cs1} alt="camion"  width={'40px'} top={'10px'} position={'relative'}  margin-right={'20px'} margin-left={'-9px'} />, 
    clase: 'nav-text-ce',
  },
];
