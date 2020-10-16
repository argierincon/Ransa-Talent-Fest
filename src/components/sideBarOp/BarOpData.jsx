import React from 'react';
import * as FaIcons from 'react-icons/fa';
import file from '../../assets/img/files.png';
import truck1 from '../../assets/img/truck1.png';
import truck2 from '../../assets/img/truck2.png';
import hc from '../../assets/img/hc.png';
import dc from '../../assets/img/dc.png';
import rq from '../../assets/img/rq.png';
import cs1 from '../../assets/img/cs1.png';

export default [
  {
    titulo: 'Solicitudes',
    ruta: '/detalle-solicitudes',
    icono: <img src={file} alt="file"  width={'58px'} top={'10px'} position={'relative'}  margin-right={'15px'} />,
    clase: 'nav-text',
  },
  {
    titulo: 'Flota Propia',
    clase: 'li-nav-text',
    icono: <img src={rq} alt="camion"  width={'40px'} top={'10px'} position={'relative'}  margin-right={'15px'} />, 
  },
  {
    titulo: 'Habilitación de unidades',
    ruta: '/habilitacion-unidades',
    icono: <img src={truck1} alt="camion" width={'58px'} top={'10px'} position={'relative'}  margin-right={'15px'}  />,
    clase: 'nav-text',
  },
  {
    titulo: 'Disponibilidad de Unidades',
    ruta: '/disponibilidad-unidades',
    icono: <img src={truck2} alt="camion" width={'58px'} top={'10px'} position={'relative'}  margin-right={'15px'}  />,
    clase: 'nav-text',
  },
  {
    titulo: 'Habilitación de conductores',
    ruta: '/habilitacion-conductores',
    icono: <img src={hc} alt="icon"  width={'58px'} top={'10px'} position={'relative'}  margin-right={'15px'} />,
    clase: 'nav-text',
  },
  {
    titulo: 'Disponibilidad de conductores',
    ruta: '/disponibilidad-conductores',
    icono: <img src={dc} alt="icon" width={'58px'} top={'10px'} position={'relative'}  margin-right={'15px'}  />,
    clase: 'nav-text',
  },
  {
    titulo: 'Cerrar sesión',
    ruta: '/cerrarsesion',
    icono: <img src={cs1} alt="camion"  width={'40px'} top={'10px'} position={'relative'}  margin-right={'20px'} margin-left={'-9px'} />, 
    clase: 'nav-text-ce',
  },
];
