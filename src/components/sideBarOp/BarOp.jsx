import React from 'react';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';
import BarOpData from './BarOpData';
import './BarOp.scss';
import logo from '../../assets/img/LOGO_RANSA.png';

const BarOp = () => {


  const clickSelecciona = (e) => {
      console.log("click",e);
      console.log(e.target);
      let elm = e.target;
      console.log(elm);
      elm.className += " seleccionado";

      
  }
    

return (
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
        {BarOpData.map((item, index) => (
          <li key={index} className={item.clase} onClick= {clickSelecciona}>
            <Link to={item.ruta} >
              {item.icono}
              <span>{item.titulo}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  </IconContext.Provider>
);
}
export default BarOp;
