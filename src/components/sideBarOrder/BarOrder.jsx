import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { BarOrderData } from './BarOrderData';
import './BarOrder.scss';
import { IconContext } from 'react-icons';
import logo from '../../assets/img/LOGO_RANSA.png';
import user from '../../assets/img/Moises.png';


function BarOrder() {
  const handleClick = () => {
    // const currentClass = document.getElementsByClassName("side_nav_item");
    // for (let i = 0; i < currentClass.length; i++) {
    //   currentClass[i].classList.toggle("active_item");
    //   console.log(currentClass[i]);
    // }
    console.log("bar order")
  };
  const [LadoBarra, setSidebar] = useState(true);

  const ViewSideBar = () => setSidebar(true);

  return (
    <>
      <IconContext.Provider value={{ color: '#1AAF42' }}>
        <div className="navbar">
          <Link to="#" className="menu-bars">
        
          </Link>


          <nav className={LadoBarra ? 'nav-menu active' : 'nav-menu'}>
            <ul className="nav-menu-items" onClick={ViewSideBar}>
              <li className="navbar-toggle">
              <div className="contenedorLogo">
              <Link to="/" className=""><img className="logo" src={logo} alt="Logo Ransa" /></Link>
            </div>
              </li>
              {BarOrderData.map((item, index) => (
                <li onClick={()=>handleClick()} key={index} className={item.clase}>
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
export default BarOrder;
