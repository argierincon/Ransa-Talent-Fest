import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BarMantDataC} from './BarMantDataC';
import './BarMantC.scss';
import { IconContext } from 'react-icons';

import logo from '../../assets/img/LOGO_RANSA.png';
import user from '../../assets/img/Moises.png';

function BarMantC() {
  const [LadoBarra, setSidebar] = useState(true);

  const ViewSideBar = () => setSidebar(true);

  return (
    <>
      <IconContext.Provider value={{ color: '#1AAF42' }}>
        <div className="navbar">
          <Link to="#" className="menu-bars" />
          <div className="header">
            <div className="contenedorUser">
              <Link to="/" className=""><img className="logo" src={user} alt="Logo User" /></Link>
              <div className="user-text">Cristian Narciso</div>
            </div>
          </div>

          <nav className={LadoBarra ? 'nav-menu active' : 'nav-menu'}>
            <ul className="nav-menu-items" onClick={ViewSideBar}>
              <li className="navbar-toggle">
                <div className="contenedorLogo">
                  <Link to="/" className=""><img className="logo" src={logo} alt="Logo Ransa" /></Link>
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
        </div>
      </IconContext.Provider>
    </>
  );
}
export default BarMantC;
