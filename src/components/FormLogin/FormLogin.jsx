import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './FormLogin.scss';
import emailIcon from '../../assets/icons/email.svg';
import BtnPrimary from '../btnPrimary/BtnPrimary';
import passwordIcon from '../../assets/icons/password.svg';

const FormLogin = () => {
  const history = useHistory();
  const [form, setForm] = useState({});
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(false);
    if (form.usuario === 'moisesc@ransa.com' && form.clave === 'p4ssw0rd!') {
      history.push('/estatus-solicitudes');
    } else if (form.usuario === 'cristiann@ransa.com' && form.clave === 'p4ssw0rd!') {
      history.push('/detalle-solicitudes');
    } else if (form.usuario === 'andyc@ransa.com' && form.clave === 'p4ssw0rd!') {
      history.push('/verificar-habilitacion-unidades');
    } else if (form.usuario === 'giselaa@ransa.com' && form.clave === 'p4ssw0rd!') {
      history.push('/verificar-habilitacion-conductores');
    } else {
      setError(true);
    }
  };

  return (
    <form method="POST" className="form-login" onSubmit={handleSubmit}>
      <h1>Iniciar Sesión</h1>
      <div className="comun">
        <img
          src={emailIcon}
          className="icon-input"
          alt="email"
        />
        <input
          name="usuario"
          type="email"
          placeholder="Correo electrónico"
          onChange={handleChange}
        />
      </div>
      <div className="comun">
        <img
          src={passwordIcon}
          className="icon-input"
          alt="password"
        />
        <input
          name="clave"
          type="password"
          placeholder="Contraseña"
          onChange={handleChange}
        />
      </div>
      {error && (
        <p style={{ color: 'red', textAlign: 'center' }}>Usuario incorrecto, intentelo de nuevo.</p>
      )}
      <BtnPrimary texto="Iniciar Sesión" />
    </form>
  );
};

export default FormLogin;
