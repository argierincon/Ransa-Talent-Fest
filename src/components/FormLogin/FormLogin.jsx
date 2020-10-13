import React from 'react';
import './FormLogin.scss';
import emailIcon from '../../assets/icons/email.svg';
import BtnPrimary from '../btnPrimary/BtnPrimary';
import passwordIcon from '../../assets/icons/password.svg';

const FormLogin = () => (
  <form className="form-login">
    <h1>Iniciar Sesión</h1>
    <div className="comun">
      <img src={emailIcon} className="icon-input" alt="email" />
      <input type="email" placeholder="Correo electrónico" />
    </div>
    <div className="comun">
      <img src={passwordIcon} className="icon-input" alt="password" />
      <input type="password" placeholder="Contraseña" />
    </div>
    <BtnPrimary texto="Iniciar Sesión" />
  </form>
);

export default FormLogin;
