import React, { useState } from 'react';
import { Link } from 'react-router-dom';
<<<<<<< HEAD:src/components/sideBarMant/BarMant.jsx
import { BarMantData} from './BarMantData';
import './BarMant.scss';
import { IconContext } from 'react-icons';
=======
import { IconContext } from 'react-icons';
import { SideBarData } from './SideBarData';
import './Bar.scss';
>>>>>>> 90b930e389848b615b68e7e1fce99f055da90529:src/components/sideBar/SideBar.jsx
import logo from '../../assets/img/LOGO_RANSA.png';
import user from '../../assets/img/Moises.png';

function BarMant() {
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
        </div>
      </IconContext.Provider>
    </>
  );
}
export default BarMant;
