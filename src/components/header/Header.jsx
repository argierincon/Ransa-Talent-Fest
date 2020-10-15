import React from 'react';
import PropTypes from 'prop-types';
import userImg from '../../assets/img/user.png';
import './Header.scss';

const Header = ({ nombre, cargo }) => (
  <header>
    <div className="container-header">
      <img src={userImg} alt="" srcSet="" />
      <div className="nombre-cargo">
        <p className="nombre">
          {nombre}
        </p>
        <p className="cargo">
          {cargo}
        </p>
      </div>
    </div>
  </header>
);

Header.propTypes = {
  nombre: PropTypes.string.isRequired,
  cargo: PropTypes.string.isRequired,
};

export default Header;
