import React from 'react';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';
import BarMantDataC from './BarMantDataC';

import './BarMantC.scss';
import logo from '../../assets/img/LOGO_RANSA.png';

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
        {BarMantDataC.map((item, index) => (
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
export default BarMantC;
