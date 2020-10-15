import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SideBarData = [
  {
    titulo: 'Solicitudes',
    ruta: '/crear-solicitud',
    icono: < FaIcons.FaFileAlt />,
    clase: 'nav-text',
  },
  {
    titulo: 'Flota Propia',
    ruta: '/verflotapropia',
    clase: 'li-nav-text',
  },
  {
    titulo: 'Habilitación de unidades',
    ruta: '/habilitarunidades',
    icono: < FaIcons.FaTruckMoving />,
    clase: 'nav-text',
  },
  {
    titulo: 'Disponibilidad de Unidades',
    ruta: '/disponibilidadunidades',
    icono: < FaIcons.FaTruckMoving/>,
    clase: 'nav-text',
  },
  {
    titulo: 'Habilitación de conductores',
    ruta: '/habilitarconductores',
    icono: < FaIcons.FaRegListAlt />,
    clase: 'nav-text',
  },
  {
    titulo: 'Disponibilidad de conductores',
    ruta: '/disponibilidadconductores',
    icono: < IoIcons.IoMdPeople />,
    clase: 'nav-text',
  },
  {
    titulo: 'Flota Tercera',
    ruta: '/verflotapropia',
    clase: 'li-nav-text',
  },
  {
    titulo: 'Habilitación de unidades',
    ruta: '/habilitarunidades',
    icono: < FaIcons.FaTruckMoving />,
    clase: 'nav-text',
  },
  {
    titulo: 'Disponibilidad de Unidades',
    ruta: '/disponibilidadunidades',
    icono: < FaIcons.FaTruckMoving />,
    clase: 'nav-text',
  },
  {
    titulo: 'Habilitación de conductores',
    ruta: '/habilitarconductores',
    icono: < FaIcons.FaRegListAlt />,
    clase: 'nav-text',
  },
  {
    titulo: 'Disponibilidad de conductores',
    ruta: '/disponibilidadconductores',
    icono: < IoIcons.IoMdPeople />,
    clase: 'nav-text',
  },
  {
    titulo: 'Cerrar sesión',
    ruta: '/cerrarsesion',
    icono: < FaIcons.FaSignOutAlt />,
    clase: 'nav-text',
  },
];
