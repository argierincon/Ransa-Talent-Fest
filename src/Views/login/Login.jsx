import React from 'react';
import FormLogin from '../../components/FormLogin/FormLogin';
import banner from '../../assets/img/banner.png';

const Login = () => (
  <div>
    <FormLogin />
    <div>
      <img src={banner} alt="baner raven" />
    </div>
  </div>
);

export default Login;
