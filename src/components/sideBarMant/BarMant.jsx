import React from 'react';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';
import BarMantData from './BarMantData';
import './BarMant.scss';

import logo from '../../assets/img/LOGO_RANSA.png';

const BarMant = () => (
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
        {BarMantData.map((item, index) => (
          <li key={index} className={item.clase}>
            <Link to={item.ruta}>
              {item.icono}
              <span>{item.titulo}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  </IconContext.Provider>
);
export default BarMant;
