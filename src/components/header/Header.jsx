import React from 'react';
import userImg from '../../assets/img/user.png';
import './Header.scss';

const Header = () => (
  <header>
    <div className="container-header">
      <img src={userImg} alt="" srcSet="" />
      <div className="nombre-cargo">
        <p className="nombre"> Moisés Carrillo </p>
        <p className="cargo"> Supervisor de operaciones </p>
      </div>
    </div>
  </header>
);

export default Header;
