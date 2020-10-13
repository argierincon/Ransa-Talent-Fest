import React from 'react';
import PropTypes from 'prop-types';

const TitleLoginRegister = ({ title }) => <h3>{title}</h3>;

TitleLoginRegister.propTypes = {
  title: PropTypes.string.isRequired,
};

export default TitleLoginRegister;
