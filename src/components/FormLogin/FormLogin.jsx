import React from 'react';
import './FormLogin.scss';

import emailIcon from '../../assets/icons/email.svg';
import passwordIcon from '../../assets/icons/password.svg';

const FormLogin = () => (
  <div className="container-form">
    <form className="form-login">
      <div className="comun">
        <img src={emailIcon} className="icon-input" alt="email" />
        <input type="email" placeholder="Correo electrónico" />
      </div>
      <div className="comun">
        <img src={passwordIcon} className="icon-input" alt="password" />
        <input type="password" placeholder="Contraseña" />
      </div>
    </form>
  </div>
);

export default FormLogin;
