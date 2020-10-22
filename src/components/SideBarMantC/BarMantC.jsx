import React from 'react';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';
import BarMantDataC from './BarMantDataC';

import './BarMantC.scss';
import logo from '../../assets/img/LOGO_RANSA.png';

let listIndex = 0;
const { pathname } = window.location;
const findIndex = BarMantDataC.findIndex(obj =>obj.ruta === pathname);
listIndex = findIndex;

const setActiveClase = (data) => {
  listIndex = data;
};

const BarMantC = () => (
  <IconContext.Provider value={{ color: '#1AAF42' }}>
    <nav className="nav-menu active">
      <ul className="nav-menu-items">
        <li className="navbar-toggle">
          <div className="contenedorLogo">
            <Link to="/" className="">
              <img className="logo" src={logo} alt="Logo Ransa" />
            </Link>
          </div>
        </li>
        {BarMantDataC.map((item, index) => {
          let className;
          if(index !==0){
             className = listIndex === index ? 'active':'';
          }
          return (
            <li key={index} className={item.clase+' '+className} onClick = {() => setActiveClase(index)}>
            <Link to={item.ruta}>
              {item.icono}
              <span>{item.titulo}</span>
            </Link>
          </li>
          )
        })};
      </ul>
    </nav>
  </IconContext.Provider>
);
export default BarMantC;
