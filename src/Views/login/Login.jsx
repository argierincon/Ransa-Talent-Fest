import React from 'react';
import FormLogin from '../../components/FormLogin/FormLogin';
import './Login.scss';
import banner from '../../assets/img/banner.jpg';
import logo from '../../assets/img/logoRansa.png';

const Login = () => (
  <div className="container-login">
    <section>
      <img src={logo} alt="logo ransa" />
      <FormLogin />
    </section>
    <section className="baner">
      <img src={banner} alt="baner ransa" />
    </section>
  </div>
);

export default Login;
